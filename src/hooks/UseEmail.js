import axios from "axios"
import { useAuth } from "../contexts/AuthContext"
const serverUrl = process.env.GATSBY_STRAPI_API_URL

export default function UseEmail() {
  const { authToken } = useAuth()

  const sendConfirmationEmail = async emailData => {
    try {
      const { data } = await axios.post(
        `${serverUrl}/api/confirm`,
        emailData,
        authToken
      )
    } catch (e) {
      console.log(e)
    }
  }

  return {
    sendConfirmationEmail,
  }
}
