import React from "react"
import InvTable from "./InvTable"
import * as styles from "./index.module.scss"
import image from "../../images/dairy-products.png"

export default function Inventory({ products }) {
  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Current Inventory</h1>
      <div className={styles.inventoryContainer}>
        <div className={styles.inventoryTable}>
          <InvTable rows={products} />
        </div>
      </div>
      <div className={styles.notesContainer}>
        <div className={styles.notes}>
          <h2>Notes about our inventory...</h2>
          <div className={styles.notesContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  )
}
