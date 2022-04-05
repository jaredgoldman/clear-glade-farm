import React, { useState, useEffect } from "react"
import getYear from "date-fns/getYear"
import Week from "./Week"
import * as styles from "./index.module.scss"
import { Dropdown } from "react-bootstrap"
import { useBooking } from "../../../contexts/BookingContext"

export default function RoomCalendar() {
  const { months, bookings, rooms } = useBooking()
  const [month, setMonth] = useState()
  const monthName = month?.month || ""

  useEffect(() => {
    if (months?.length) setMonth(months[0])
  }, [months])

  const getWeeklyBookings = start => {
    const weeklyBookings = []
    if (bookings) {
      for (let booking of bookings) {
        const correctDate =
          Number(new Date(start)) === Number(new Date(booking.start))
        if (correctDate) {
          weeklyBookings.push(booking)
        }
      }
    }
    return weeklyBookings
  }

  const schedule = month?.weeks?.map((week, i) => {
    const { start, end, thursday } = week

    const bookings = getWeeklyBookings(start)
    return (
      <Week
        start={start}
        thursday={thursday}
        end={end}
        bookings={bookings}
        rooms={rooms}
        key={i}
      />
    )
  })

  const dropdownItems = months?.map(month => {
    return (
      <Dropdown.Item key={month.month} onClick={() => setMonth(month)}>
        {month.month}
      </Dropdown.Item>
    )
  })

  const currentYear = getYear(Date.now())
  return (
    <div>
      <div className={styles.dropdown}>
        <p>Select a month in {currentYear}</p>
        <Dropdown>
          <Dropdown.Toggle>{monthName}</Dropdown.Toggle>
          <Dropdown.Menu>{dropdownItems}</Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles.weeksContainer}>
        <div className={styles.weeks}>{schedule}</div>
      </div>
    </div>
  )
}
