import React, { useState } from "react"
import { Link } from "gatsby"
import Hamburger from "./hamburger"
import Socials from "./socials"
import Menu from "./menu"
import "./header.css"
import Image from "../components/image"

const Header = ({ siteTitle, location }) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleNavOpen = () => setNavOpen(!isNavOpen)

  return (
    <div className="header">
      <div className="header-links">
        <Link
          to="/"
          className={
            location.pathname === "/" ? "blog-name" : "blog-name smaller"
          }
        >
          {siteTitle}
        </Link>
        {/* {location.pathname === "/" ? (
          <Link className="daily" to="/daily">
            Daily JS
          </Link>
        ) : (
          <div />
        )} */}
        <p className="synopsis">Nick's Devblog</p>
      </div>
      <div>
        {location.pathname === "/" && <Socials />}
        <Hamburger isNavOpen={isNavOpen} toggleNavOpen={toggleNavOpen} />
      </div>
      <Menu isOpen={isNavOpen} />
      <Image />
    </div>
  )
}

export default Header
