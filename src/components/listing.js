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
          id
          excerpt(pruneLength: 250)

          frontmatter {
            title
            slug
            date
            desc
            topics
          }
        }
      }
    }
  }
`

const Post = styled.article`
  margin-bottom: 4rem;
  :hover h2 {
    color: #ff0b77;
  }

  .read-more:hover {
    color: #ff0b77;
    transition: 0.2s;
  }

  h2 {
    color: white;
    letter-spacing: 0.5px;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: 0.2s;
    font-size: 24px;
  }

  .description {
    color: #9c97ad;
    font-size: 0.9rem;
    margin: 0.5rem 0;
    letter-spacing: 0.5px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .exerpt {
    letter-spacing: 0.5px;
    font-size: 0.9rem;
    line-height: 1.5rem;
    font-weight: 300;
  }

  .read-more {
    font-size: 0.9rem !important;
    margin: 0;
    font-weight: 600;
  }
`

const Listing = () => {
  const data = useStaticQuery(LISTING_QUERY)

  return (
    <div>
      <ul>
        <p className="recent-heading">Recently Published</p>

        {data.allMarkdownRemark.edges.map(edge => (
          <Link
            key={edge.node.frontmatter.slug}
            to={`/posts${edge.node.frontmatter.slug}`}
          >
            <Post>
              <h2>{edge.node.frontmatter.title}</h2>
              <p className="description"> {edge.node.frontmatter.desc}</p>

              <p className="exerpt">{edge.node.excerpt}</p>

              <p className="read-more">Read More</p>
            </Post>
          </Link>
        ))}
      </ul>
    </div>
  )
}
export default Listing
