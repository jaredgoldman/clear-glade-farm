// Libraries
import React from 'react'
// Components
import { Carousel } from 'react-bootstrap'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// Assets
import * as styles from './index.module.scss'

export default function Gallery({ collections }) {
  const carouselCollections = collections.map(col => {
    const { description, id, name, collection } = col.node
    return (
      <div className={styles.carousel}>
        <Carousel fade key={id}>
          {collection.map(image => {
            const { id, localFile, caption } = image
            const imageSrc = getImage(localFile)
            return (
              <Carousel.Item key={id}>
                <GatsbyImage
                  className="d-block w-100"
                  image={imageSrc}
                  alt={caption}
                  objectFit="contain"
                />
                <Carousel.Caption>
                  <h3>{name}</h3>
                  <p>{caption}</p>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
        <p className={styles.description}>{description}</p>
      </div>
    )
  })
  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Media</h2>
      {carouselCollections}
    </div>
  )
}
