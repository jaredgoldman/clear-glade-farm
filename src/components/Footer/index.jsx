import React from "react"
import * as styles from "./Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.root}>
      <div>Copyright Clear Glade Farms 2021</div>
      <div>
        <a href="mailto:contact@clearglade.com">contact</a>
      </div>
    </footer>
  )
}
