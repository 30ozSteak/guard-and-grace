import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  margin-bottom: 0;

  img {
    marginbottom: 0;
  }
`

const Nav = styled.div`
  color: white;
  text-align: left;
  width: 50%;
  margin: 4rem auto;
  h1 {
    display: flex;
    justify-content: space-between;
  }
  a {
    text-decoration: none;
    color: #e972a5;
    font-weight: 300;
    font-size: 1.3rem;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Nav>
      <h1>
        <Link to="/">{siteTitle}</Link>
        <Link to="/about">About</Link>
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
