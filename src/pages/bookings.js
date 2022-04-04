import React from "react"
import Layout from "../components/Layout"
import Bookings from "../components/Bookings"
import { BookingProvider } from "../contexts/BookingContext"
import { graphql } from "gatsby"

export default function schedule({ data }) {
  const rooms = data.allStrapiAccommodation.edges
  return (
    <Layout>
      <BookingProvider>
        <Bookings rooms={rooms} />
      </BookingProvider>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiAccommodation {
      edges {
        node {
          id
          description
          type
          name
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(
                  height: 800
                  width: 1200
                  transformOptions: { fit: COVER }
                )
              }
            }
          }
        }
      }
    }
  }
`
