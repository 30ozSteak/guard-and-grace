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
li {
  padding: 0 !important;
  margin: 0 !important;
}

@media (max-width: 700px) {
  display: none;
}
  padding: 0;
  margin: 0;
  list-style-type: none;

  h3{
    color: #817dff !important;

    text-transform: uppercase;
    font-size: 1rem !important;
  }

  a {
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.7rem;
      border-bottom: 1.5px solid transparent;
      transition: 0.2s;
      padding-bottom: 0.2rem;
      color: #524763;
    }
    a:hover {
      color: white;
    }
    
  }
`

const Archive = () => {
  const data = useStaticQuery(POST_ARCHIVE_QUERY)

  return (
    <aside>
      <ArchiveList>
        <h3>Popular Content</h3>
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
