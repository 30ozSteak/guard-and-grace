import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const LISTING_QUERY = graphql`
  query BlogPostListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MM DD 'YY")
            title
            slug
          }
        }
      }
    }
  }
`

const Post = styled.article`
  padding: 1rem;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  p {
    font-size: 0.8rem;
  }
  h2 {
    margin-bottom: 0;
    font-weight: 900;
    font-size: 1.5rem;
  }
  .read-more-link {
    text-transform: uppercase;
    font-size: 0.7rem;
    border-bottom: 1.5px solid transparent;
    transition: 0.1s;
    padding-bottom: 0.2rem;
    color: #524763;
  }
  .read-more-link:hover {
    border-bottom: 1.5px solid #524763;
  }
`
// box shadow that's subtle and good for cards
// border-radius: 4px;

// box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);

const Listing = () => {
  const data = useStaticQuery(LISTING_QUERY)

  return (
    <div>
      <ul>
        {data.allMarkdownRemark.edges.map(edge => (
          <Post key={edge.node.frontmatter.slug}>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <p>{edge.node.frontmatter.date}</p>
            <p>{edge.node.excerpt}</p>
            <Link
              class="read-more-link"
              to={`/posts${edge.node.frontmatter.slug}`}
            >
              Read More
            </Link>
          </Post>
        ))}
      </ul>
    </div>
  )
}
export default Listing
