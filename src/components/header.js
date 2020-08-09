import { Link } from "gatsby"
import PropTypes from "prop-types"
import Socials from "./socials"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
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
    font-size: 24px;
    color: white;
    margin: 0.5rem;
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
    {location.pathname === "/" && <Socials />}
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
