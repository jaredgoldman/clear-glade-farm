import React from "react"
import * as styles from "./Footer.module.scss"
import { useAuth } from "../../contexts/AuthContext"

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
