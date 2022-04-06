// Libraries
import React, { useContext, useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import axios from 'axios'
import {
  addWeeks,
  startOfWeek,
  endOfWeek,
  nextThursday,
  eachMonthOfInterval,
  addYears,
  getWeeksInMonth,
  getMonth,
} from 'date-fns'
// Hooks
import UseEmail from '../hooks/UseEmail'
import { useAuth } from './AuthContext'
// Data
import { months as monthNames } from '../constants/date'
const serverURL = process.env.GATSBY_STRAPI_API_URL

const BookingContext = React.createContext()

export function useBooking() {
  return useContext(BookingContext)
}

export function BookingProvider({ children }) {
  const { authToken } = useAuth()
  const [months, setMonths] = useState()
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
    setMonths(getMonths(1))
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

  const weekInFuture = date => date.getTime() >= Date.now()

  const getWeeks = (currDate, numOfWeeks) => {
    const firstWeek = weekInFuture(currDate) ? formatWeek(currDate) : null
    const weeks = [firstWeek].filter(Boolean)
    for (let i = 1; i < numOfWeeks; i++) {
      currDate = addWeeks(currDate, 1)
      if (weekInFuture(currDate)) {
        const formattedWeek = formatWeek(currDate)
        weeks.push(formattedWeek)
      }
    }
    return weeks
  }

  const getMonths = years => {
    const start = Date.now()
    const end = addYears(Date.now(), years)
    const months = eachMonthOfInterval({ start, end })

    return months
      .map((m, i) => {
        if (i < 12) {
          const numOfWeeks = getWeeksInMonth(m)
          return {
            numOfWeeks,
            month: monthNames[getMonth(m)],
            start: m,
            weeks: getWeeks(m, numOfWeeks),
          }
        }
      })
      .filter(Boolean)
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
    try {
      const { data } = await axios.get(`${serverURL}/api/bookings/`, authToken)
      return data.data
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const value = {
    rooms,
    months,
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
