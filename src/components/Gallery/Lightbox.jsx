import React, { useState } from "react"
import Lightbox from "react-image-lightbox"
import * as styles from "./Lightbox.module.scss"
const URL = process.env.GATSBY_STRAPI_API_URL

export default function LightboxElement({
  galleryOpen,
  setGalleryOpen,
  description,
  collectionName,
  handleGalleryOpen,
  images,
  collectionId,
}) {
  const imageURLs = images.map(image => `${URL}${image.url}`)
  const [photoIndex, setPhotoIndex] = useState(0)

  const handleCloseGallery = () => {
    setGalleryOpen(false)
  }

  const onMoveNextRequest = () => {
    setPhotoIndex(prevValue => (prevValue + 1) % imageURLs.length)
  }

  const onMovePrevRequest = () => {
    setPhotoIndex(prevValue => (prevValue + 1) % imageURLs.length)
  }
  return (
    <div className={styles.root}>
      <h4 className={styles.heading}>{collectionName}</h4>
      <div
        className={styles.thumbnail}
        onClick={() => handleGalleryOpen(collectionId)}
      >
        <img src={imageURLs[0]} alt="" />
      </div>
      {galleryOpen && (
        <Lightbox
          mainSrc={imageURLs[photoIndex]}
          nextSrc={imageURLs[(photoIndex + 1) % imageURLs.length]}
          prevSrc={imageURLs[(photoIndex - 1) % imageURLs.length]}
          onCloseRequest={handleCloseGallery}
          onMoveNextRequest={onMoveNextRequest}
          onMovePrevRequest={onMovePrevRequest}
        />
      )}
      <div className={styles.description}>{description}</div>
    </div>
  )
}
