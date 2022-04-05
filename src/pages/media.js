import React from "react"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import { graphql } from "gatsby"

export default function media({ data }) {
  const collections = data.allStrapiImageCollection.edges
  return (
    <Layout>
      <Gallery collections={collections} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiImageCollection {
      edges {
        node {
          id
          name
          description
          collection {
            caption
            id
            localFile {
              childImageSharp {
                gatsbyImageData(height: 500, width: 800)
              }
            }
          }
        }
      }
    }
  }
`
