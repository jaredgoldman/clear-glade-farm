// Libraries
import React from 'react'
// Components
import Room from './Room'
// Assets
import * as styles from './index.module.scss'

export default function RoomList({ rooms }) {
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
    <>
      <h2 className={styles.heading}>Our Accommodations</h2>
      <div className={styles.rooms}>{roomSelection}</div>
    </>
  )
}
