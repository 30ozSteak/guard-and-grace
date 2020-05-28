import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
            date(formatString: "MM 'YY")
            title
            slug
          }
        }
      }
    }
  }
`

const Listing = () => {
  const data = useStaticQuery(LISTING_QUERY)

  return (
    <div>
      <ul>
        {/* you can destructure edge here to be (({node})) and then each would only be node.frontmatter.slug, node.frontmatter.date */}
        {data.allMarkdownRemark.edges.map(edge => (
          <article key={edge.node.frontmatter.slug}>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>
              <h2>{edge.node.frontmatter.title}</h2>
            </Link>
            <p>{edge.node.frontmatter.date}</p>
            <p>{edge.node.excerpt}</p>
            <Link to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
          </article>
        ))}
      </ul>
    </div>
  )
}
export default Listing
