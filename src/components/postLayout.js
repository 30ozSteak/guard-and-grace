import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"

const postLayout = props => {
  const { markdownRemark } = props.data
  return (
    <Layout location={props.location}>
      <h1 style={{ color: "white", marginTop: "3rem", marginBottom: "0" }}>
        {markdownRemark.frontmatter.title}
      </h1>
      <p style={{ color: "lightgray" }}>{markdownRemark.frontmatter.date}</p>
      <p
        style={{ color: "white", fontSize: "1.2rem", lineHeight: "2rem" }}
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
