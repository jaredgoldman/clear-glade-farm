// Libraries
import React from 'react'
import format from 'date-fns/format'
// Components
import { Card } from 'react-bootstrap'
// Data
const URL = process.env.GATSBY_STRAPI_API_URL

export default function Announcement({ title, content, createdAt, imageUrl }) {
  const formattedDate = format(new Date(createdAt), 'EEEE, LLL do - p')
  const imageSrc = `${URL}${imageUrl}`

  return (
    <Card>
      {imageUrl && <Card.Img variant="top" src={imageSrc} />}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{formattedDate}</Card.Footer>
    </Card>
  )
}
