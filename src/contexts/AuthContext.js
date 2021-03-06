// Libraries
import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import ls from 'local-storage'
import { navigate } from 'gatsby-link'
import addHours from 'date-fns/addHours'
// Data
const serverUrl = process.env.GATSBY_STRAPI_API_URL

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [authError, setAuthError] = useState('')

  const expiresDate = ls.get('expires')
  const expired = expiresDate < Date.now()

  useEffect(() => {
    const user = ls.get('user')
    if (user && !expired) {
      setCurrentUser(user)
      setLoggedIn(true)
    } else {
      ls.remove('user')
      navigate('/')
    }
  }, [])

  const handleSetAuthError = errorMsg => {
    setAuthError(errorMsg)
    setTimeout(() => {
      setAuthError('')
    }, 5000)
  }

  const login = async (email, password) => {
    try {
      if (!email || !password) {
        return handleSetAuthError('Please enter a valid email or password')
      }
      const user = await axios.post(`${serverUrl}/api/auth/local/`, {
        identifier: email,
        password,
      })
      ls('user', user.data)
      const expires = addHours(Date.now(), 1).getTime()
      ls('expires', expires)
      navigate('/about')
    } catch (e) {
      handleSetAuthError('Error logging in')
    }
  }

  const logout = () => {
    ls.remove('user')
    setLoggedIn(false)
  }

  const { jwt } = ls.get('user') || {}

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
