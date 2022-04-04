import React from "react"
import Layout from "../components/Layout"
import Inventory from "../components/Inventory"
import { graphql } from "gatsby"

export default function inventory({ data }) {
  const products = data.allStrapiProduct.edges
  return (
    <Layout>
      <Inventory products={products} />
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
  }
`
