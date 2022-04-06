// Libraries
import React, { useState } from 'react'
// Components
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import RoomOption from './RoomOption'
// Data
import { useBooking } from '../../../contexts/BookingContext'
// Assets
import * as styles from './RoomModal.module.scss'

export default function RoomModal({
  showModal,
  setShowModal,
  weekInfo,
  bookings,
  setShowConfirmToast,
}) {
  const [showConfirm, setShowConfirm] = useState(false)
  const [selectedRoomData, setSelectedRoom] = useState()
  const { rooms, processingBooking, setProcessingBooking, bookRoom } =
    useBooking()

  const isBooked = id => {
    if (bookings) {
      for (let booking of bookings) {
        const correctId = booking.roomId === id
        if (correctId) {
          return true
        }
      }
    }
  }

  const roomOptions = rooms?.map((room, i) => {
    const { name, id, type } = room.node
    const booked = isBooked(id)

    return (
      <RoomOption
        roomName={name}
        id={id}
        weekInfo={weekInfo}
        setShowConfirm={setShowConfirm}
        setSelectedRoom={setSelectedRoom}
        booked={booked}
        setProcessingBooking={setProcessingBooking}
        processingBooking={processingBooking}
        type={type}
        key={id}
      />
    )
  })

  const handleCloseModal = () => {
    setShowModal(false)
    setShowConfirm(false)
  }

  const handleCancelConfirm = () => setShowConfirm(false)

  const handleBookRoom = async () => {
    await bookRoom(selectedRoomData)
    setProcessingBooking(prevValue => !prevValue)
    setShowConfirmToast(true)
    handleCloseModal()
    setTimeout(() => {
      setShowConfirm(false)
    }, 1000)
  }

  return (
    <div className={styles.root}>
      <Modal show={showModal} size="lg">
        <Modal.Header>
          <h4 className={styles.heading}>Book A Room:</h4>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.roomOptions}>{rooms && roomOptions}</div>
        </Modal.Body>
        <Modal.Footer>
          {showConfirm && (
            <>
              <Button onClick={() => handleCancelConfirm()} variant="secondary">
                Cancel
              </Button>
              <Button onClick={() => handleBookRoom()} variant="primary">
                Confirm Booking
              </Button>
            </>
          )}
          <Button onClick={() => handleCloseModal()} disabled={showConfirm}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
