import React from "react"
import * as styles from "./Event.module.scss"
import format from "date-fns/format"
import { Card } from "react-bootstrap"
const URL = process.env.GATSBY_STRAPI_API_URL

export default function Event({ name, start, end, description, imageUrl }) {
  const dateRange = `${format(new Date(start), "PPp")} - ${format(
    new Date(end),
    "p"
  )}`
  const imageSrc = `${URL}${imageUrl}`

  return (
    <Card className={styles.root}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{dateRange}</Card.Footer>
    </Card>
  )
}

{
  /* <div className={styles.root}>
<h2 className={styles.eventHeading}>{name}</h2>
<div className={styles.eventDetails__date}>{dateRange}</div>
{imageUrl && (
  <div className={styles.attachment}>
    <div className={styles.imageContainer}>
      <img src={imageSrc} alt="" />
    </div>
  </div>
)}
<div className={styles.eventDetails}>
  <div className={styles.eventDetails__description}>{description}</div>
</div>
</div> */
}
