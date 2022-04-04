import React, { useEffect, useState, useRef } from "react"
import { format } from "date-fns"
import RoomModal from "./RoomModal"
import * as styles from "./Week.module.scss"
import { Card, Button } from "react-bootstrap"

export default function Week({ start, end, thursday, bookings, rooms }) {
  const [showModal, setShowModal] = useState(false)
  const [availabilites, setAvailabilites] = useState({})

  const campsiteCount = rooms.filter(
    room => room.node.type === "Campsite"
  ).length
  const roomCount = rooms.filter(room => room.node.type === "Room").length

  useEffect(() => {
    const availableRooms = getAvailableBookings()
    setAvailabilites(availableRooms)
  }, [bookings])

  const getAvailableBookings = () => {
    let rooms = 0
    let campSites = 0
    for (let booking of bookings) {
      if (booking.type === "Room") {
        rooms += 1
      } else {
        campSites += 1
      }
    }
    const availableRooms = roomCount - rooms
    const availableCampSites = campsiteCount - campSites
    return {
      rooms: availableRooms,
      campSites: availableCampSites,
    }
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const dateRange = `${format(thursday, "E LLL do")} - ${format(
    end,
    "E LLL do"
  )}`

  return (
    <Card className={styles.root}>
      <Card.Header>{dateRange}</Card.Header>
      <Card.Body>
        <Card.Text>
          <div>{`There are currently ${availabilites.rooms} rooms available and ${availabilites.campSites} campsite available`}</div>
        </Card.Text>
      </Card.Body>
      <RoomModal
        showModal={showModal}
        setShowModal={setShowModal}
        weekInfo={{ start, thursday, end }}
        bookings={bookings}
      />
      <Button onClick={() => handleShowModal()}>Book a room this week</Button>
    </Card>
  )
}
