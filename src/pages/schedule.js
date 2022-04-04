import React from "react"
import { graphql } from "gatsby"
import Schedule from "../components/Schedule"
import Layout from "../components/Layout"

export default function schedule({ data }) {
  const events = data.allStrapiEvent.edges
  return (
    <Layout>
      <Schedule events={events} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiEvent {
      edges {
        node {
          id
          description
          createdAt
          name
          start
          end
          image {
            url
          }
        }
      }
    }
  }
`
