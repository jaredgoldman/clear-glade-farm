// Libraries
import React, { useState, useEffect } from 'react'
import getYear from 'date-fns/getYear'
// Components
import Week from './Week'
import { Dropdown, Row, Col, Toast } from 'react-bootstrap'
// Data
import { useBooking } from '../../../contexts/BookingContext'
// Assets
import * as styles from './index.module.scss'
// Libraries
// Components
// Data
// Assets
export default function RoomCalendar() {
  const { months, bookings, rooms } = useBooking()
  const [month, setMonth] = useState()
  const [showConfirmToast, setShowConfirmToast] = useState(false)

  const currentYear = getYear(Date.now())
  const monthName = month?.month || ''

  useEffect(() => {
    if (months?.length) setMonth(months[0])
  }, [months])

  const handleCloseToast = () => setShowConfirmToast(false)

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
        setShowConfirmToast={setShowConfirmToast}
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

  return (
    <div>
      <div className={styles.confirmToast}>
        {showConfirmToast && (
          <Row>
            <Col xs={15}>
              <Toast
                className="w-100 z-index-10"
                bg="success"
                onClick={handleCloseToast}
                on
              >
                <Toast.Header className="justify-content-end" />
                <Toast.Body>Booking succesful!</Toast.Body>
              </Toast>
            </Col>
          </Row>
        )}
      </div>
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
