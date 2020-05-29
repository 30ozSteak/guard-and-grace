import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0;

  img {
    marginbottom: 0;
  }
`

const Nav = styled.div`
  color: black;
  text-align: left;

  display: flex;
  justify-content: center;
  padding: 1rem 0;
  a {
    text-decoration: none;
    color: black;
  }
`

const Header = ({ siteTitle, siteDescription }) => (
  <HeaderWrapper>
    <Nav>
      <h1>
        <Link to="/">{siteTitle}</Link>
        <p>{siteDescription}</p>
      </h1>
    </Nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `skate better`,
  siteDescription: `a software development blog by nick dambrosio`,
}

export default Header
