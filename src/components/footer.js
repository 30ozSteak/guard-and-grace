import React from "react"
import PropTypes from "prop-types"
import Contact from "./contact"

import styled from "styled-components"

const FooterWrapper = styled.footer`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  position: relative;
  bottom: 0;
  color: white;
  left: 0;
  right: 0;
  user-select: none;
  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    transition: 0.2s;
  }
  a:hover {
    color: #f683b5;
    filter: brightness(1.2);
  }
`
const Footer = ({ authorName, siteUrl }) => (
  <FooterWrapper>
    <p>© {new Date().getFullYear()} </p>
    <a href="https://www.linkedin.com/in/ndambr/">{authorName}, </a>
    built in
    <a href="https://www.gatsbyjs.org"> Gatsby.js</a>,{" "}
    <a href={siteUrl}>view source</a>
  </FooterWrapper>
)

export default Footer

Footer.propTypes = {
  authorName: PropTypes.string,
  siteUrl: PropTypes.string,
}
