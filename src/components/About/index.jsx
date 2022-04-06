import React from 'react'
import MapContainer from './MapContainer'
import * as styles from './index.module.scss'
import Rules from './Rules'

export default function About({ about, guideLines }) {
  const { farm, project, contact } = about
  return (
    <div className={styles.root}>
      <div className={styles.article}>
        <h2 className={styles.articleHeading}>About The Farm</h2>
        <div dangerouslySetInnerHTML={{ __html: farm }} />
      </div>
      <div className={styles.article}>
        <h2 className={styles.articleHeading}>About The Project</h2>
        <div dangerouslySetInnerHTML={{ __html: project }} />
      </div>
      <div className={styles.contact}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactHeading}>Contact/Location</h2>
          <div dangerouslySetInnerHTML={{ __html: contact }} />
        </div>
        <div className={styles.map}>
          <MapContainer />
        </div>
      </div>
      <div className={styles.rules}>
        <Rules content={guideLines} />
      </div>
    </div>
  )
}
