// Libraries
import React from 'react'
// Components
import { Accordion } from 'react-bootstrap'
// Assets
import * as styles from './AboutAccordion.module.scss'

export default function AboutAccordion({ heading, content }) {
  const accordionItems = content.map((item, i) => {
    const {
      content: {
        data: { content: rowBody },
      },
      label,
    } = item

    return (
      <Accordion.Item eventKey={i} className="w-100">
        <Accordion.Header>{label}</Accordion.Header>
        <Accordion.Body>
          {rowBody && <div dangerouslySetInnerHTML={{ __html: rowBody }} />}
        </Accordion.Body>
      </Accordion.Item>
    )
  })
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>{heading}</h1>
      <Accordion defaultActiveKey={0} className="mw-100">
        {accordionItems}
      </Accordion>
    </div>
  )
}
