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

const Footer = styled.footer`
  text-transform: lowercase;
  text-align: center;
  font-size: 0.6rem;
  font-family: Arial, Helvetica, sans-serif;
  a {
    text-decoration: none;
    color: inherit;
    transition: 0.2s;
  }
  a:hover {
    color: purple;
  }
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
      <div>
        <MainLayout>
          <Archive />
          <div>{children}</div>
        </MainLayout>
        <Footer>
          © {new Date().getFullYear()}{" "}
          <a href="https://www.linkedin.com/in/ndambr/">me, </a>built in
          <a href="https://www.gatsbyjs.org"> Gatsby.js</a>,{" "}
          <a href="https://github.com/30ozSteak/guard-and-grace">source</a>
        </Footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// we set this as an empty object because the browser wont be able to do location.anything since it's not inside our computer
Layout.defaultProps = {
  location: {},
}

export default Layout
