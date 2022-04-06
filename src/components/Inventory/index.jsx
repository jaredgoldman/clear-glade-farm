// Libraries
import React from 'react'
// Components
import InvTable from './InvTable'
// Assets
import * as styles from './index.module.scss'

export default function Inventory({ products, content }) {
  const { notesHeading, notes } = content

  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>Current Inventory</h1>
      <div className={styles.inventoryTable}>
        <InvTable rows={products} />
      </div>
      <div className={styles.notes}>
        <h2>{notesHeading}</h2>
        <div
          className={styles.notesContent}
          dangerouslySetInnerHTML={{ __html: notes }}
        />
      </div>
    </div>
  )
}
