import React from "react"
import * as styles from "./Announcement.module.scss"
import format from "date-fns/format"
import { Card } from "react-bootstrap"
const URL = process.env.GATSBY_STRAPI_API_URL

export default function Announcement({ title, content, createdAt, imageUrl }) {
  const formattedDate = format(new Date(createdAt), "EEEE, LLL do - p")
  const imageSrc = `${URL}${imageUrl}`

  return (
    <Card className={styles.root}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{formattedDate}</Card.Footer>
    </Card>
  )
}
