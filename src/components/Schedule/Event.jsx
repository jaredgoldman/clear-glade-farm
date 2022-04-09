// Libraries
import React from 'react'
import format from 'date-fns/format'
// Components
import { Card } from 'react-bootstrap'
// Data
const URL = process.env.GATSBY_STRAPI_API_URL

export default function Event({ name, start, end, description, imageUrl }) {
  const dateRange = `${format(new Date(start), 'PPp')} - ${format(
    new Date(end),
    'p'
  )}`
  const imageSrc = `${URL}${imageUrl}`

  return (
    <Card>
      {imageUrl && <Card.Img variant="top" src={imageSrc} />}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{dateRange}</Card.Footer>
    </Card>
  )
}
