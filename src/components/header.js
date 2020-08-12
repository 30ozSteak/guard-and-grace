import { Link } from "gatsby"
import PropTypes from "prop-types"
import Hamburger from "./hamburger"
import Socials from "./socials"
import React, { useState } from "react"
import "../styles/Header.css"

const Header = ({ siteTitle, location }) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleNavOpen = () => {
    console.log("lol")
    setNavOpen(!isNavOpen)
  }

  return (
    <div className="header">
      <div>
        <Link
          to="/"
          className={
            location.pathname === "/" ? "blog-name" : "blog-name smaller"
          }
        >
          {siteTitle}
        </Link>
        {location.pathname === "/" ? (
          <Link className="about-link" to="/daily">
            Daily JS
          </Link>
        ) : (
          <div />
        )}
      </div>
      <div>
        {location.pathname === "/" && <Socials />}
        <Hamburger isNavOpen={isNavOpen} toggleNavOpen={toggleNavOpen} />
      </div>
    </div>
  )
}

export default Header
