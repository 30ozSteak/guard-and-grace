import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundWrapper = styled.div`
  color: white;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const NotFoundPage = () => (
  <Layout>
    <NotFoundWrapper>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
