import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Archive from "./archive"
import "./layout.css"

const ThemeProvider = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 1100px;
  @media (max-width: 700px) {
    padding: 4vw !important;
  }
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    padding: 1rem;
    margin: 0 1rem;
  }

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
    margin-top: 10rem;
  }

  @media (max-width: 700px) {
    .listing {
      display: block;
    }
  }

  .post {
    display: flex;
    margin: auto;
    margin-top: 4rem;
  }

  @media (max-width: 700px) {
    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
      margin: 0;
    }

    pre code {
      font-size: 3vw;
      padding: 0 !important;
    }
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
