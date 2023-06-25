// Libraries
import React from 'react'
import format from 'date-fns/format'
// Components
import { Card } from 'react-bootstrap'
// Assets
import * as styles from './index.module.scss'
// Data
const URL = process.env.GATSBY_STRAPI_API_URL

export default function Event({ name, start, end, description, imageUrl }) {
  const dateRange = `${format(new Date(start), 'PPp')} - ${format(
    new Date(end),
    'p'
  )}`
  const imageSrc = `${URL}${imageUrl}`

  return (
    <Card className={styles.card}>
      {imageUrl && <Card.Img variant="top" src={imageSrc} />}
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{dateRange}</Card.Footer>
    </Card>
  )
}
