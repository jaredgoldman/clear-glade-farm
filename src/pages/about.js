import React from 'react'
import Layout from '../components/Layout'
import About from '../components/About'
import { graphql } from 'gatsby'

export default function about({ data }) {
  const {
    farm_heading: farmHeading,
    childStrapiAboutFarmTextnode: { farm },
    project_heading: projectHeading,
    childStrapiAboutProjectTextnode: { project },
    contact_heading: contactHeading,
    childStrapiAboutContactTextnode: { contact },
    faq_heading: faqHeading,
    FAQ: faqContent,
  } = data.allStrapiAbout.nodes[0]

  const content = {
    farmHeading,
    farm,
    projectHeading,
    project,
    contactHeading,
    contact,
    faqHeading,
    faqContent,
  }
  return (
    <Layout>
      <About content={content} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiAbout {
      nodes {
        contact_heading
        childStrapiAboutContactTextnode {
          contact
        }
        farm_heading
        childStrapiAboutFarmTextnode {
          farm
        }
        project_heading
        childStrapiAboutProjectTextnode {
          project
        }
        faq_heading
        FAQ {
          label
          content {
            data {
              content
            }
          }
        }
      }
    }
  }
`
