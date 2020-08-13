import React from "react"
import { Link } from "gatsby"
import Socials from "./socials"

import imageSrc from "../images/steak-profile.jpg"

import { useSpring, animated, config } from "react-spring"
import "./menu.css"
import "./header.css"

const Menu = ({ isOpen }) => {
  const { x } = useSpring({
    x: isOpen ? 0 : 100,
    config: config.stiff,
  })
  return (
    <div className="menu" style={{ pointerEvents: isOpen ? "all" : "none" }}>
      <animated.div
        style={{
          transform: x.interpolate(x => `translate3d(0, ${x * -1}%, 0)`),
        }}
        className="menu-card"
      >
        <img
          alt="nicks pretty face"
          src={imageSrc}
          className="profile-picture"
        />
        <p>
          Hi, 👋 <br /> I'm Nick, a Software Developer from Denver, Colorado.{" "}
          <br />
        </p>
        <Socials />
      </animated.div>
    </div>
  )
}

export default Menu
