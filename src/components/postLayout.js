import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
// import Img from "gatsby-image"

// static query can be used anywhere you want, does not accept variables / parameters
// cant interact with context

// page query must be used on pages, can accept variables
// can interact with context

const postLayout = props => {
  const { markdownRemark } = props.data
  return (
    <Layout location={props.location}>
      <h1>{markdownRemark.frontmatter.title}</h1>
      {/* <Img fluid={data.file.childImageSharp.fluid} /> */}

      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`

export default postLayout
