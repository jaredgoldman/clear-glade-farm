import React from "react"
import Event from "./Event"
// import eventData from '../../mocks/eventData'
import * as styles from "./index.module.scss"

export default function Events({ events }) {
  const upcomingEvents = events.map(event => {
    const { id, description, createdAt, name, start, end, image } = event.node

    return (
      <Event
        key={id}
        name={name}
        start={start}
        end={end}
        createdAt={createdAt}
        description={description}
        imageUrl={image.url}
      />
    )
  })

  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Upcoming Events</h2>
      <div className={styles.events}>{upcomingEvents}</div>
    </div>
  )
}
