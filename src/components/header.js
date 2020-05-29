import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// import gatsbyLogo from "../images/gatsby-icon.png"

const HeaderWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;

  img {
    marginbottom: 0;
  }
`

const Nav = styled.div`
  color: black;
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 0;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Nav>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </Nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Nicks Blog`,
}

export default Header
