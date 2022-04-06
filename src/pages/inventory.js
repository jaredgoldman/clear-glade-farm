import React from 'react'
import Layout from '../components/Layout'
import Inventory from '../components/Inventory'
import { graphql } from 'gatsby'

export default function inventory({ data }) {
  const content = {
    notes:
      data.allStrapiInventory.nodes[0].childStrapiInventoryNotesTextnode.notes,
    notesHeading: data.allStrapiInventory.nodes[0].notes_heading,
  }

  const products = data.allStrapiProduct.edges
  return (
    <Layout>
      <Inventory products={products} content={content} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiProduct {
      edges {
        node {
          id
          name
          quantity
          description
          price
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 200, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
    allStrapiInventory {
      nodes {
        childStrapiInventoryNotesTextnode {
          notes
        }
        notes_heading
      }
    }
  }
`
