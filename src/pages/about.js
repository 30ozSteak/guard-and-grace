import React from "react"
import Layout from "../components/layout"
// import Archive from "../components/archive"

const About = ({ location }) => (
  <Layout location={location}>
    <div>
      <h1>About</h1>
      <p>
        Nick is a software developer in Denver, Colorado. A creator who's spent
        the majority of his life online
      </p>
      {/* <Archive /> */}
    </div>
  </Layout>
)

export default About
