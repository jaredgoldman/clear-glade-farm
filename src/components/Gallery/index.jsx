import React, { useState } from "react"
import LightboxElement from "./Lightbox"
import * as styles from "./index.module.scss"

export default function Gallery({ collections }) {
  const [galleryOpen, setGalleryOpen] = useState()

  const handleGalleryOpen = collectionId => {
    setGalleryOpen(collectionId)
  }

  const galleryCollections = collections?.map((collectionData, i) => {
    const { id, name, description, collection } = collectionData.node

    return (
      <LightboxElement
        galleryOpen={galleryOpen === id ? true : false}
        setGalleryOpen={setGalleryOpen}
        images={collection}
        description={description}
        key={id}
        collectionName={name}
        handleGalleryOpen={handleGalleryOpen}
        collectionId={id}
      />
    )
  })

  return (
    <div className={styles.root}>
      <div className={styles.heading}>
        <h2>Gallery</h2>
      </div>
      <div className={styles.collections}>Coming soon!</div>
    </div>
  )
}
