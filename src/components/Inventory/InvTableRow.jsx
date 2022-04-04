import React from "react"
import * as styles from "./InvTableRow.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function InvTableRow({
  name,
  quantity,
  price,
  description,
  image,
  number,
}) {
  const imageSrc = getImage(image.localFile)
  return (
    <tr className={styles.row}>
      <td>{number}</td>
      <td className={styles.item}>
        <strong>{name}</strong>
      </td>
      <td className={styles.quantity}>{quantity}</td>
      <td className={styles.price}>${price}</td>
      <td className={styles.description}>{description}</td>
      <td>
        <GatsbyImage image={imageSrc} alt={`image of ${name}`} />
      </td>
    </tr>
  )
}
