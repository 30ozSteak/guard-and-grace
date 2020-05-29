import React from "react"
import PropTypes from "prop-types"

import { Spring } from "react-spring/renderprops"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"

import Header from "./header"
import Contact from "./contact"
import "./layout.css"

const MainLayout = styled.main`
  text-align: left;
  margin: auto;
  max-width: 50%;
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

  // the image query above isn't being used but is being saved for posterity and future understandings

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring
        from={{ height: location.pathname === "/" ? 300 : 1000 }}
        to={{ height: 1000 }}
      >
        {styles => (
          <div style={{ overflow: "hidden", ...styles }}>
            <MainLayout>
              {/* <Archive /> */}
              <div>{children}</div>
            </MainLayout>
          </div>
        )}
      </Spring>
      <Contact />
      <div>
        <Footer>
          © {new Date().getFullYear()}{" "}
          <a href="https://www.linkedin.com/in/ndambr/">Nick Dambrosio, </a>
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
