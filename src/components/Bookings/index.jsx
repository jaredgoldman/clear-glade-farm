import React from "react"
import RoomCalendar from "./RoomCalendar"
import RoomList from "./RoomList"
import * as styles from "./index.module.scss"

export default function Schedule({ rooms }) {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Lodging Schedule</h1>
      <RoomCalendar rooms={rooms} />
      <RoomList rooms={rooms} />
    </div>
  )
}
