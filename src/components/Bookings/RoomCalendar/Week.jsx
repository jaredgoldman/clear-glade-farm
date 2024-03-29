// Libraries
import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
// Components
import RoomModal from './RoomModal'
import { Card, Button, Alert } from 'react-bootstrap'
// Assets
import * as styles from './Week.module.scss'

export default function Week({
  start,
  end,
  thursday,
  bookings,
  rooms,
  setShowConfirmToast,
}) {
  const [showModal, setShowModal] = useState(false)
  const [availabilites, setAvailabilites] = useState({})

  const campsiteCount = rooms.filter(
    room => room.node.type === 'Campsite'
  ).length
  const roomCount = rooms.filter(room => room.node.type === 'Room').length

  useEffect(() => {
    const getAvailableBookings = () => {
      let rooms = 0
      let campSites = 0
      for (let booking of bookings) {
        if (booking.type === 'Room') {
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

    const availableRooms = getAvailableBookings()
    setAvailabilites(availableRooms)
  }, [bookings, campsiteCount, roomCount])

  const handleShowModal = () => {
    setShowModal(true)
  }

  const dateRange = `${format(thursday, 'E LLL do')} - ${format(
    end,
    'E LLL do'
  )}`

  const roomsAvailable = availabilites.rooms > 0
  const campsitesAvailable = availabilites.campSites > 0

  return (
    <Card className={styles.root}>
      <Card.Header>{dateRange}</Card.Header>
      <Card.Body className="pb-10">
        <Alert
          className="text-center"
          variant={roomsAvailable ? 'success' : 'secondary'}
        >
          {roomsAvailable ? 'Rooms available!' : 'No rooms available'}
        </Alert>
        <Alert
          className="text-center mb-0"
          variant={campsitesAvailable ? 'success' : 'secondary'}
        >
          {campsitesAvailable
            ? 'Campsites available!'
            : 'No campsites available'}
        </Alert>
      </Card.Body>
      <RoomModal
        showModal={showModal}
        setShowModal={setShowModal}
        weekInfo={{ start, thursday, end }}
        bookings={bookings}
        setShowConfirmToast={setShowConfirmToast}
      />
      <Button onClick={() => handleShowModal()}>Book a room this week</Button>
    </Card>
  )
}
