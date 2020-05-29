import React from "react"
import Layout from "../components/layout"
import Archive from "../components/archive"

const About = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>About</h1>
      <p>
        Nick is a software developer in Denver, Colorado. An endless well of
        somewhat interesting
      </p>
      {/* <Archive /> */}
    </div>
  </Layout>
)

export default About
