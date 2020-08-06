import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Archive from "./archive"
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
  max-width: 60rem;
  margin: 0.5rem auto;
  margin-bottom: 0;

  h2 {
    transition: 0.2s;
  }
  h2:hover {
    color: #ff0b77;
  }
  em {
    color: #ff0b77;
  }
  a {
    color: #ff0b77;
  }
  hr {
    background-color: white;
  }
  p {
    color: white;
  }

  .recent-articles {
    letter-spacing: 1px;
    font-size: 1rem;
  }

  .listing {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 5rem;
  }

  .post {
    display: flex;
    margin: auto;
    padding: 1rem;
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
          repository
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
      <div className={location.pathname === "/" ? "listing" : "post"}>
        <div>{children}</div>

        {location.pathname === "/" ? <Archive /> : <div />}
      </div>

      <Footer
        authorName={data.site.siteMetadata.authorName}
        repository={data.site.siteMetadata.repository}
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
