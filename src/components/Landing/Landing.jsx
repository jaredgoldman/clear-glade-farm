// Libraries
import React from 'react'
// Components
import Login from '../Login/Login'
import { StaticImage } from 'gatsby-plugin-image'
// Data
import { useAuth } from '../../contexts/AuthContext'
// Assets
import farmVideo from '../../videos/farm.mp4'
import * as styles from './Landing.module.scss'

export default function Landing() {
  const VideoBackground = () => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <video
          class="${loggedIn ? styles.videoHeader : styles.video}"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="${farmVideo}" type="video/mp4" />
        </video>
       `,
        }}
      ></div>
    )
  }
  const { loggedIn } = useAuth()
  return (
    <main className={styles.root}>
      <div className={styles.videoContainer}>
        {/* <video
          className={loggedIn ? styles.videoHeader : styles.video}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={farmVideo} type="video/mp4" />
        </video> */}
        <VideoBackground />
      </div>
      <div className={styles.content}>
        <h1 className={styles.welcome}>Welcome To Clear Glade</h1>
        <div className={styles.brandLogin}>
          <div className={styles.image}>
            <StaticImage
              src="../../images/logo.png"
              alt="logo"
              placeholder="blurred"
              layout="constrained"
              width={500}
              height={500}
            />
          </div>
          {!loggedIn && <Login />}
        </div>
      </div>
    </main>
  )
}
