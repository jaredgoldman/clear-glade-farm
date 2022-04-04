import React from "react"
import Room from "./Room"

// import { useBooking } from "../../../contexts/BookingContext"
import * as styles from "./index.module.scss"

export default function RoomList({ rooms }) {
  // const { rooms } = useBooking()

  const roomSelection = rooms?.map(room => {
    const { name, type, id, description, image } = room.node

    return (
      <Room
        type={type}
        roomName={name}
        roomImage={image}
        description={description}
        key={id}
      />
    )
  })

  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Our Rooms</h2>
      <div className={styles.rooms}>{roomSelection}</div>
    </div>
  )
}
