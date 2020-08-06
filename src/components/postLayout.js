import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import Contact from "./contact"
import styled from "styled-components"

const postLayout = props => {
  const { markdownRemark } = props.data
  return (
    <Layout location={props.location}>
      <BlogPost>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        />
      </BlogPost>
      <Contact />
    </Layout>
  )
}

const BlogPost = styled.ul`
  h1 {
    color: white;
    margin: 0;
    margin-bottom: 15rem;
  }

  a:hover {
    text-decoration: underline;
  }
`

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
