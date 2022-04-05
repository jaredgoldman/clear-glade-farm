import React, { useState } from "react"
import farmVideo from "../../videos/farm.mp4"
import Login from "../Login/Login"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Landing.module.scss"
import { useAuth } from "../../contexts/AuthContext"

export default function Landing() {
  const { loggedIn } = useAuth()
  return (
    <main className={styles.root}>
      <div className={styles.videoContainer}>
        <video
          className={loggedIn ? styles.videoHeader : styles.video}
          autoPlay
          loop
          muted
        >
          <source src={farmVideo} type="video/mp4" />
        </video>
      </div>
      <div className={styles.content}>
        <h1 className={styles.welcome}>Welcome To Clear Glade</h1>
        <div className={styles.brandLogin}>
          <StaticImage
            src="../../images/logo.png"
            alt="logo"
            placeholder="blurred"
            layout="constrained"
            width={500}
            height={500}
            className={styles.image}
          />
          {!loggedIn && <Login />}
        </div>
      </div>
    </main>
  )
}
