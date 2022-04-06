// Libraries
import React from 'react'
// Components
import RoomCalendar from './RoomCalendar'
import RoomList from './RoomList'
// Assets
import * as styles from './index.module.scss'

export default function Schedule({ rooms }) {
  return (
    <>
      <h1 className={styles.heading}>Lodging Schedule</h1>
      <RoomCalendar rooms={rooms} />
      <RoomList rooms={rooms} />
    </>
  )
}
