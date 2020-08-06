import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const FooterWrapper = styled.footer`
  font-size: 0.8rem;
  text-align: center;
  color: white;
  margin-top: 1rem;
  user-select: none;
  a {
    color: #ff0b77;
    text-decoration: none;
    transition: 0.2s;
  }
  a:hover {
    filter: brightness(1.2);
  }
`
const Footer = ({ authorName, repository }) => (
  <FooterWrapper>
    <div>
      © {new Date().getFullYear()}
      {"  "}
      <a href="https://www.linkedin.com/in/ndambr/">{authorName}, </a>
      built in
      <a href="https://www.gatsbyjs.org"> Gatsby.js</a>,{" "}
      <a href={repository}>View Source</a>
    </div>
  </FooterWrapper>
)

export default Footer

Footer.propTypes = {
  authorName: PropTypes.string,
  siteUrl: PropTypes.string,
}
