import React, { useContext, useEffect, useState } from "react"
import { addWeeks, startOfWeek, endOfWeek, nextThursday } from "date-fns"
import axios from "axios"
import UseEmail from "../hooks/UseEmail"
import { useAuth } from "./AuthContext"
import { useStaticQuery, graphql } from "gatsby"
const serverURL = process.env.GATSBY_STRAPI_API_URL

const BookingContext = React.createContext()

export function useBooking() {
  return useContext(BookingContext)
}

export function BookingProvider({ children }) {
  const { authToken, jwt } = useAuth()
  // const [rooms, setRooms] = useState()
  const [weeks, setWeeks] = useState()
  const [bookings, setBookings] = useState()
  const [processingBooking, setProcessingBooking] = useState(false)

  const { sendConfirmationEmail } = UseEmail()

  const roomData = useStaticQuery(graphql`
    query MyQuery {
      allStrapiAccommodation {
        edges {
          node {
            id
            description
            name
            type
          }
        }
      }
    }
  `)

  const rooms = roomData.allStrapiAccommodation.edges

  useEffect(() => {
    setWeeks(getWeeks(Date.now()))
  }, [])

  useEffect(() => {
    getBookings().then(data => {
      const bookings = data.map(bookings => ({
        id: bookings.id,
        ...bookings.attributes,
      }))
      setBookings(bookings)
    })
  }, [processingBooking])

  const getWeeks = currDate => {
    const firstWeek = formatWeek(currDate)
    const weeks = [firstWeek]

    for (let i = 1; i <= 7; i++) {
      currDate = addWeeks(currDate, 1)
      const formattedWeek = formatWeek(currDate)
      weeks.push(formattedWeek)
    }
    return weeks
  }

  const bookRoom = async bookingData => {
    try {
      const { data } = await axios.post(
        `${serverURL}/api/bookings`,
        { data: bookingData },
        authToken
      )
      sendConfirmationEmail(data)
      return data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getBookings = async () => {
    //TODO: only retreive bookings from the present day forward
    try {
      const res = await axios.get(`${serverURL}/api/bookings/`, authToken)
      return res.data.data
    } catch (error) {
      console.log(error)
    }
  }

  // HELPERS
  const formatWeek = currDate => {
    const start = startOfWeek(currDate, { weekStartsOn: 1 })
    const end = endOfWeek(currDate, { weekStartsOn: 1 })
    const thursday = nextThursday(start)

    return {
      start,
      end,
      thursday,
    }
  }

  const value = {
    rooms,
    weeks,
    bookings,
    bookRoom,
    getBookings,
    processingBooking,
    setProcessingBooking,
  }

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  )
}
