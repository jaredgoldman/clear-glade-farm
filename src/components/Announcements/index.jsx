// Libraries
import React from 'react'
// Components
import Announcement from './Announcement'
// Assets
import * as styles from './index.module.scss'

export default function Announcements({ posts }) {
  const announcements = posts.reverse().map((post, i) => {
    if (i <= 5) {
      const { title, content, createdAt, updatedAt, id, Image } = post.node

      return (
        <Announcement
          title={title}
          content={content}
          createdAt={createdAt}
          updatedAt={updatedAt}
          imageUrl={Image.url}
          key={id}
        />
      )
    } else {
      return null
    }
  })

  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>Recent Announcements</h2>
      <div className={styles.announcements}>{announcements}</div>
    </div>
  )
}
