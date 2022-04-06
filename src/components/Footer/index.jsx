// Libraries
import React from 'react'
// Assets
import * as styles from './Footer.module.scss'
// Data
import { useAuth } from '../../contexts/AuthContext'

export default function Footer() {
  const { loggedIn } = useAuth()

  if (!loggedIn) {
    return null
  }

  return (
    <footer className={styles.root}>
      <div>Copyright Clear Glade Farm 2021</div>
      <div>
        <a href="mailto:andrew@cleargladefarm.com">Contact us</a>
      </div>
    </footer>
  )
}
