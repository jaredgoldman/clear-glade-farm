import React from "react"
import MapContainer from "./MapContainer"
import * as styles from "./index.module.scss"
import Amenities from "./Amenities"
import Rules from "./Rules"

export default function About() {
  return (
    <div className={styles.root}>
      <div className={styles.article}>
        <h2 className={styles.articleHeading}>About The Farm</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis varius quam
        quisque id diam. Tristique senectus et netus et malesuada fames.
        Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna.
        Dolor sed viverra ipsum nunc aliquet pretium vulputate sapien nec
        sagittis.
      </div>
      <div className={styles.article}>
        <h2 className={styles.articleHeading}>About The Project</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis varius quam
        quisque id diam. Tristique senectus et netus et malesuada fames.
        Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna.
        Dolor sed viverra ipsum nunc aliquet pretium vulputate sapien nec
        sagittis.
      </div>
      <div className={styles.contact}>
        <div className={styles.contactInfo}>
          <h2 className={styles.contactHeading}>Contact/Location</h2>
          <p>Address: 1597 Queens Line #474, Minden, ON K0M 2K0</p>
          <p>Phone contact: 1234567890</p>
          <p>
            Email contact:{" "}
            <a href="mailto:contact@clearglade.com">contact@clearglade.come</a>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            varius quam quisque id diam. Tristique senectus et netus et
            malesuada fames. Pharetra pharetra massa massa ultricies mi quis
            hendrerit dolor magna.
          </p>
        </div>
        <div className={styles.map}>
          <MapContainer />
        </div>
      </div>
      <div className={styles.rules}>
        <Rules />
      </div>
    </div>
  )
}
