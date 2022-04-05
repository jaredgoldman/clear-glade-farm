import React, { useContext, useState, useEffect } from "react"
import axios from "axios"
import ls from "local-storage"
import { navigate } from "gatsby-link"
const serverUrl = process.env.GATSBY_STRAPI_API_URL

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [authError, setAuthError] = useState("")

  useEffect(() => {
    const user = ls.get("user")
    if (user) {
      setCurrentUser(user)
      setLoggedIn(true)
    }
  }, [])

  const handleSetAuthError = errorMsg => {
    setAuthError(errorMsg)
    setTimeout(() => {
      setAuthError("")
    }, 5000)
  }

  const login = async (email, password) => {
    try {
      const user = await axios.post(`${serverUrl}/api/auth/local/`, {
        identifier: email,
        password,
      })
      ls("user", user.data)
      navigate("/about")
    } catch (e) {
      handleSetAuthError("Error logging in")
    }
  }

  const logout = () => {
    ls.remove("user")
    setLoggedIn(false)
  }

  const { jwt } = ls.get("user") || {}

  const authToken = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  }

  const value = {
    authToken,
    login,
    logout,
    loggedIn,
    currentUser,
    authError,
    setAuthError,
    jwt,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
