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
        <div className="title-block">
          <p>{markdownRemark.frontmatter.topics}</p>
          <h1>{markdownRemark.frontmatter.title}</h1>
        </div>

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
  max-width: 50rem;

  a {
    word-wrap: break-word !important;
  }

  .title-block h1 {
    color: white;
  }

  .title-block p {
    margin-bottom: 0;
    color: #ff0b77;
  }

  .title-block {
    text-align: center;
    margin-bottom: 15rem;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    word-wrap: break-word !important;
  }
`

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        topics
        date
        slug
      }
    }
  }
`

export default postLayout
