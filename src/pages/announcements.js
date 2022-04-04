import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Announcements from "../components/Announcements"

export default function user({ data }) {
  const posts = data.allStrapiPost.edges
  return (
    <Layout>
      <Announcements posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiPost {
      edges {
        node {
          id
          createdAt
          updatedAt
          content
          title
          Image {
            id
            url
          }
        }
      }
    }
  }
`
