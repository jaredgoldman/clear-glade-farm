// Libraries
import React from 'react'
// Components
import { Card } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// Assets
import * as styles from './Room.module.scss'

export default function Room({ roomName, roomImage, description }) {
  const image = getImage(roomImage.localFile)

  return (
    <Card className={styles.root}>
      <Card.Header>{roomName}</Card.Header>
      <Card.Body className={styles.body}>
        <p>{description}</p>
        <GatsbyImage image={image} alt={`image of the ${roomName}`} />
      </Card.Body>
    </Card>
  )
}
{
  /* <div className={styles.imageContainer}>
  <img src={roomImage} />
</div> */
}
