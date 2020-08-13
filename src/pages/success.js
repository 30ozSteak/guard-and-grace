import React from "react"
import { Link } from "gatsby"

import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import styled from "styled-components"

const SuccessWrapper = styled.div`
  button {
    margin: 1rem auto;
    display: block;
    width: 100%;
    max-width: 15rem;
    border-radius: 30px;
    cursor: pointer;
    font-size: 1.2rem;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    transition: 0.2s;
    background-color: #ff0b77;
  }
  button:hover {
    filter: brightness(1.1);
  }
  button:active {
    transform: scale(0.9);
  }
`

const Success = () => (
  <Layout>
    <Helmet>
      <title>Success Page</title>
      <meta name="success after submitting a form" content="Success Page" />
    </Helmet>

    <SuccessWrapper>
      <header>
        <h2
          style={{
            color: "white",
            height: "5rem",
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          Thanks for reaching out! I'll get back to you as soon as I can.
        </h2>
        <Link to={"/"}>
          <button className="button">Go Back</button>
        </Link>
      </header>
    </SuccessWrapper>
  </Layout>
)

export default Success
