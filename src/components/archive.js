import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  font-family: Arial, Helvetica, sans-serif;

  a {
    text-decoration: none;
    color: black;
      text-transform: uppercase;
      font-size: 0.7rem;
      border-bottom: 1.5px solid transparent;
      transition: 0.1s;
      padding-bottom: 0.2rem;
      color: #524763;
    }
    a:hover {
      border-bottom: 1.5px solid #524763;
    }
  }
`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <aside>
      <h3>Archive</h3>
      <ArchiveList>
        {data.allMarkdownRemark.edges.map(edge => (
          <li key={edge.node.frontmatter.slug}>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>
              {edge.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ArchiveList>
    </aside>
  )
}

export default Archive
