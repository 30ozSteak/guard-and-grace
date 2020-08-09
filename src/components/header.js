import { Link } from "gatsby"
import PropTypes from "prop-types"
import Socials from "./socials"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  margin: 2rem 0;
  align-items: center;

  .blog-name {
    color: #ff0b77;
    font-size: 24px;
    font-weight: 600;
    text-decoration: none;
    transition: 0.2s;
  }

  .blog-name-smaller {
    font-size: 1rem;
    text-decoration: none;
    color: #ff0b77;
    font-weight: 600;
    transition: 0.2s;
  }

  svg {
    color: #9c97ad;
    transition: 0.1s;
  }

  svg:hover {
    color: white;
  }

  a {
    font-size: 24px;
    line-height: 24px;
  }
`

const Header = ({ siteTitle, location }) => (
  <HeaderWrapper>
    <Link
      to="/"
      className={location.pathname === "/" ? "blog-name" : "blog-name-smaller"}
    >
      {siteTitle}
    </Link>
    <div>{location.pathname === "/" && <Socials />}</div>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Nick Dambrosio Dot Com`,
  siteDescription: `A Software Development blog by Nick Dambrosio`,
}

export default Header
