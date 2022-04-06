// Libraries
import React from 'react'
// Components
import InvTableRow from './InvTableRow'
import { Table } from 'react-bootstrap'
// Assets
import * as styles from './InvTable.module.scss'

export default function InvTable({ rows }) {
  const inventoryRows = rows.map((product, i) => {
    const { description, quantity, name, price, image } = product.node
    return (
      <InvTableRow
        name={name}
        quantity={quantity}
        price={price}
        description={description}
        image={image}
        key={i}
        number={i + 1}
      />
    )
  })

  return (
    <div className={styles.root}>
      <Table responsive striped bordered hover>
        <thead className={styles.tableHeading}>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Description</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>{inventoryRows}</tbody>
      </Table>
    </div>
  )
}
