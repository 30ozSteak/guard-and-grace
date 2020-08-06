import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  margin-top: 1rem;
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

const AuthorBlock = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin: 2rem 0;

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
      <AuthorBlock>
        <div className="about-text"></div>
      </AuthorBlock>
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
  siteTitle: `Hooks and Hamburgers`,
  siteDescription: `A Software Development blog by Nick Dambrosio`,
}

export default Header
