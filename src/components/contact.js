import React, { useState } from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"

const ContactCardWrapper = styled.div`
  border: 1px solid gray;
  border-radius: 6px;
  display: flex;
  width: 100%;
  max-width: 50rem;
  align-items: center;
  color: white;
  box-shadow: 0 2px 15px 0 rgba(26, 26, 27, 0.637);

  .contact-greeting {
    width: 50%;
    padding: 2rem;
  }

  .contact-form {
    padding: 2rem;
    width: 50%;
    margin: auto;
  }

  .contact-form input {
    display: block;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    width: 100%;
  }

  textarea {
    display: block;
    width: 100%;
  }

  label {
    font-size: 0.7rem;
  }

  button {
    margin: 1rem auto;
    display: block;
    width: 100%;
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
    filter: brightness(1.3);
  }

  @media (max-width: 700px) {
    display: block;
    padding: 0;
    .contact-greeting {
      width: 100%;
      text-align: center;
    }

    .contact-form {
      width: 100%;
      margin: auto;
    }
    input {
      min-width: 5rem;
      width: 100% !important;
    }
  }
`
export default function Contact() {
  const [value, setValue] = useState({})

  const handleChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e
      .targetfetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeURI({
          "form-name": form.getAttribute("name"),
          ...value,
        }),
      })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <ContactCardWrapper>
      <div className="contact-greeting">
        <h2>Interested in Development, but not sure how to start?</h2>
        <p>
          I'm always open for mentorship! <br />
          Let's come up with a plan for learning something new.
        </p>
      </div>
      <div className="contact-form">
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <textarea name="message" onChange={handleChange} />
            </label>
          </p>
          <p>
            <button className="button" type="submit">
              Send
            </button>
          </p>
        </form>
      </div>
    </ContactCardWrapper>
  )
}
