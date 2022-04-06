import React from 'react'
import * as styles from './Rules.module.scss'
import { Accordion } from 'react-bootstrap'

export default function Rules({ content }) {
  const { lodging, property, facilities } = content
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Guidelines</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Lodging Guidelines</Accordion.Header>
          <Accordion.Body>
            <div dangerouslySetInnerHTML={{ __html: lodging }} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Property Guidelines</Accordion.Header>
          <Accordion.Body>
            <div dangerouslySetInnerHTML={{ __html: property }} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Facilities Guidelines</Accordion.Header>
          <Accordion.Body>
            <div dangerouslySetInnerHTML={{ __html: facilities }} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
