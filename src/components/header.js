import { Link } from "gatsby"
import PropTypes from "prop-types"
import profilePicture from "../images/steak-profile.jpg"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  .blog-name {
    text-decoration: none;
    color: #f683b5;
    font-weight: 900;
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    transition: 0.2s;
    margin: 0;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.3rem;
    margin auto 0;
  }
  .blog-name:hover {
    filter: brightness(1.2);
  }
  .blog-name.smaller {
    font-size: 1rem;
  }
  a {
    color: #f683b5;
  }
`

const AuthorBlock = styled.div`
  width: 100%;
  height: 4rem;
  margin-top: auto;
  margin-bottom: auto;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2rem;
  margin-top: 4rem;
  margin-bottom: 2rem;
  display: flex;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  p {
    color: white;
    margin-left: 1rem;
    margin-bottom: 0;
  }
  a {
    margin-left: 1rem;
    font-size: 1rem;
    transition: 0.2s;
  }
  a:hover {
    filter: brightness(1.2);
  }
  .about-text {
    margin-top: 12px;
  }
`

const Header = ({ description, siteTitle, location }) => (
  <HeaderWrapper>
    <Link
      to="/"
      class="blog-title"
      className={location.pathname === "/" ? "blog-name" : "blog-name smaller"}
    >
      {siteTitle}
    </Link>
    {location.pathname === "/" ? (
      <AuthorBlock>
        <img src={profilePicture} alt={`Nick Dambrosio`} />
        <div className="about-text">
          <p className="about">Software Development Blog by Nick Dambrosio</p>
          <a href="https://www.twitter.com/iaaafm" className="about">
            Twitter
          </a>
          <a href="https://www.github.com/30ozsteak" className="about">
            Github
          </a>
        </div>
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
  siteTitle: `Complex State`,
  siteDescription: `A Software Development blog by Nick Dambrosio`,
}

export default Header
