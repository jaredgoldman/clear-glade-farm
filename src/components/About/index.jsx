import React from 'react'
import MapContainer from './MapContainer'
import * as styles from './index.module.scss'
import AboutAccordion from './AboutAccordion'

export default function About({ content }) {
  const {
    farmHeading,
    farm,
    projectHeading,
    project,
    contactHeading,
    contact,
    faqHeading,
    faqContent,
  } = content
  return (
    <div className={styles.root}>
      <div className={styles.article}>
        {farmHeading && (
          <h2 className={styles.articleHeading}>{farmHeading}</h2>
        )}
        {farm && <div dangerouslySetInnerHTML={{ __html: farm }} />}
      </div>
      <div className={styles.article}>
        {projectHeading && (
          <h2 className={styles.articleHeading}>{projectHeading}</h2>
        )}
        {project && <div dangerouslySetInnerHTML={{ __html: project }} />}
      </div>
      <div className={styles.contact}>
        <div className={styles.contactInfo}>
          {contactHeading && (
            <h2 className={styles.contactHeading}>{contactHeading}</h2>
          )}
          {contact && <div dangerouslySetInnerHTML={{ __html: contact }} />}
        </div>
        <div className={styles.map}>
          <MapContainer />
        </div>
      </div>
      <div className={styles.rules}>
        <AboutAccordion heading={faqHeading} content={faqContent} />
      </div>
    </div>
  )
}
