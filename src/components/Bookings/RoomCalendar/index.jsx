import React from "react"
import Week from "./Week"
import * as styles from "./index.module.scss"
import { useBooking } from "../../../contexts/BookingContext"

export default function RoomCalendar() {
  const { weeks, bookings, rooms } = useBooking()

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

  const schedule = weeks?.map((week, i) => {
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

  return (
    <div>
      <div className={styles.weeksContainer}>
        <div className={styles.weeks}>{schedule}</div>
      </div>
    </div>
  )
}
