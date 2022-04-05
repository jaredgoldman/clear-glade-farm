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
      <video
        className={loggedIn ? styles.videoHeader : styles.video}
        autoPlay
        loop
        muted
      >
        <source src={farmVideo} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <h1>Welcome To Clear Glade</h1>
        <div className={styles.welcome}>
          <StaticImage
            src="../../images/logo.png"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={500}
            height={500}
          />
          {!loggedIn && <Login />}
        </div>
      </div>
    </main>
  )
}
