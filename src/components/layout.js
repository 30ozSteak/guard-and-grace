import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const ThemeProvider = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ul {
    margin: 0;
    padding: 0;
  }
  max-width: 35rem;
  justify-content: center;
  margin: 1rem auto;
  margin-bottom: 0;

  h2 {
    transition: 0.2s;
    font-size: 1.8rem;
  }
  h2:hover {
    color: #f683b5;
  }
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          authorName
        }
      }
    }
  `)

  return (
    <ThemeProvider>
      <Header
        desciption={data.site.siteMetadata.description}
        location={location}
        siteTitle={data.site.siteMetadata.title}
      />
      <div>
        <div>{children}</div>
      </div>
      <Footer
        authorName={data.site.siteMetadata.authorName}
        siteUrl={data.site.siteMetadata.siteUrl}
      />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  location: {},
}

export default Layout
