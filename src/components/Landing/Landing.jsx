import React, { useState } from "react"
import logo from "../../images/logo.png"
import Login from "../Login/Login"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./Landing.module.scss"
import { useAuth } from "../../contexts/AuthContext"

export default function Landing() {
  const { loggedIn } = useAuth()
  return (
    <main className={styles.root}>
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
    </main>
  )
}
