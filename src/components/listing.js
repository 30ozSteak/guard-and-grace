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
          excerpt(pruneLength: 75)
          frontmatter {
            date(formatString: "MM DD 'YY")
            title
            slug
            desc
            topics
          }
        }
      }
    }
  }
`

const Post = styled.article`
  margin: 3rem 0;
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: #f683b5;
  }
  p.date {
    font-size: 0.8rem;
    color: #d3d3d3;
    margin-bottom: 0;
  }
  p.exerpt {
    font-size: 1rem;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
  }
  h2 {
    margin-bottom: 0;
    color: white;
    font-weight: 900;
    font-size: 1.9rem;
  }
`

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
            <p className="date">
              {edge.node.frontmatter.date} - {edge.node.frontmatter.topics}
            </p>
            <p className="exerpt"> {edge.node.frontmatter.desc}</p>{" "}
            {/* <p className="exerpt">{edge.node.excerpt}</p> */}
          </Post>
        ))}
      </ul>
    </div>
  )
}
export default Listing
