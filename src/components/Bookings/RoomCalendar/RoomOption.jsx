// Libraries
import React from 'react'
// Components
import { Button } from 'react-bootstrap'
// Data
import { useAuth } from '../../../contexts/AuthContext'
// Assets
import * as styles from './RoomOption.module.scss'

export default function RoomOption({
  weekInfo,
  id,
  setShowConfirm,
  setSelectedRoom,
  booked,
  roomName,
  type,
}) {
  const { currentUser } = useAuth()
  // pass room info to confirm modal
  const handleSetSelectedRoom = () => {
    setSelectedRoom({
      ...weekInfo,
      firstName: currentUser.user.firstName,
      lastName: currentUser.user.lastName,
      email: currentUser.user.email,
      roomId: id,
      roomName,
      type,
    })
    setShowConfirm(true)
  }

  return (
    <Button
      className={styles.root}
      onClick={() => handleSetSelectedRoom()}
      disabled={booked}
    >
      {booked ? (
        <div>{`${roomName} currently booked by ${currentUser.user.firstName} ${currentUser.user.lastName}`}</div>
      ) : (
        <div>{`Book ${roomName}`}</div>
      )}
    </Button>
  )
}
