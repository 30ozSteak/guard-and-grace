import { Link } from "gatsby"
import PropTypes from "prop-types"
import Button from "./button"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  font-family: Arial, Helvetica, sans-serif;

  .blog-name {
    text-decoration: none !important;
    color: #ff0b77;

    font-weight: 600 !important;
    font-size: 24px !important;
    transition: 0.2s;
  }

  .blog-name-smaller {
    font-size: 1rem;
    text-decoration: none !important;
    color: #ff0b77;
    font-weight: 900;
    transition: 0.2s;
    margin: 0;
  }
`

const SiteNav = styled.div`
  font-weight: 500;
  font-size: 24px !important;

  margin: 0.8rem 0;
  margin-left: 5rem;
  ul {
    color: #9c97ad;
    font-weight: 600;
    list-style-type: none;
    display: flex;
    user-select: none;
    font-size: 0.9rem;
  }

  li {
    margin: 0 !important;
    cursor: pointer;
    transition: 0.2s;
  }

  li:hover {
    color: white;
  }

  li:active {
    color: #ff0b77;
  }

  display: flex;
  align-items: center;
  p {
    color: white;
    margin-bottom: 0;
  }
  a {
    margin-right: 1rem;
    font-size: 1rem;
    transition: 0.2s;
  }
  a:hover {
    filter: brightness(1.2);
  }
`

const Header = ({ siteTitle, location }) => (
  <HeaderWrapper>
    <Link to="/" className="blog-name">
      {siteTitle}
    </Link>
    {location.pathname === "/" ? (
      <SiteNav>
        <Button />
      </SiteNav>
    ) : (
      <div />
    )}
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
