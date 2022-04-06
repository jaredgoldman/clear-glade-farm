import React from 'react'
import Layout from '../components/Layout'
import About from '../components/About'
import { graphql } from 'gatsby'

export default function about({ data }) {
  const aboutData = Object.values({ ...data.allStrapiAbout.nodes[0] })
  const guideLineData = Object.values({ ...data.allStrapiGuideline.nodes[0] })
  let about = {}
  let guideLines = {}
  aboutData.forEach(obj => (about = { ...about, ...obj }))
  guideLineData.forEach(obj => (guideLines = { ...guideLines, ...obj }))

  return (
    <Layout>
      <About about={about} guideLines={guideLines} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiAbout {
      nodes {
        childStrapiAboutContactTextnode {
          contact
        }
        childStrapiAboutFarmTextnode {
          farm
        }
        childStrapiAboutProjectTextnode {
          project
        }
      }
    }
    allStrapiGuideline {
      nodes {
        childStrapiGuidelineFacilitiesTextnode {
          facilities
        }
        childStrapiGuidelineLodgingTextnode {
          lodging
        }
        childStrapiGuidelinePropertyTextnode {
          property
        }
      }
    }
  }
`
