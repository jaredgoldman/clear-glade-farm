import React from "react"
import room from "../../images/room.png"

import * as styles from "./Amenities.module.scss"

export default function Amenities() {
  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h2>Our Amenities</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.amenitiesImages}>
          <div className={styles.imageContainer}>
            <img src={room} alt="" />
          </div>
          <div className={styles.imageContainer}>
            <img src={room} alt="" />
          </div>
          <div className={styles.imageContainer}>
            <img src={room} alt="" />
          </div>
          <div className={styles.imageContainer}>
            <img src={room} alt="" />
          </div>
          <div className={styles.imageContainer}>
            <img src={room} alt="" />
          </div>
          <div className={styles.imageContainer}>
            <img src={room} alt="" />
          </div>
        </div>
        <div className={styles.amenities}>
          <div className={styles.amenitiesDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className={styles.amenitiesList}></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
