import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Spring } from "react-spring/renderprops"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Archive from "./archive"
import "./layout.css"

const MainLayout = styled.main`
  maxwidth: 90%;
  margin: 5rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { regex: "/Analysis/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring
        from={{ height: location.pathname === "/" ? 100 : 500 }}
        to={{ height: 500 }}
      >
        {styles => (
          <div style={{ overflow: "hidden", ...styles }}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )}
      </Spring>
      {/* {location.pathname === "/" && (
      )} this is conditional rendering based on what page the user is on*/}
      <div>
        <MainLayout>
          <Archive />
          <div>{children}</div>
        </MainLayout>
        <footer>
          © {new Date().getFullYear()}, Built with ❤️ and
          <a href="https://www.gatsbyjs.org"> Gatsby.js</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
