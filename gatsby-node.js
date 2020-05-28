const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    // run graphql with this query with a promise that's the query and return the results
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      // destrucutre each node in the forEach loop and create a page for each of those blog posts
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve("./src/components/postLayout.js"),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      })
      // after we finish the pages, resolve the primise and finish the function
      resolve()
    })
  })
}
