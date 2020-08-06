import React from "react"
import styled from "styled-components"
import { RiMailSendLine } from "react-icons/ri"

const ContactCardWrapper = styled.div`
  border: 1px solid transparent;
  border-radius: 6px;
  display: flex;
  color: white;
  align-content: center;
  box-shadow: 0 2px 15px 0 rgba(26, 26, 27, 0.637);

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    .contact-greeting {
      width: 100% !important;
    }
    .contact-form {
      width: 100% !important;
      height: 100% !important;
      min-height: 20rem;
    }
    input {
      width: 90% !important;
    }
    textarea {
      width: 90% !important;
    }
  }

  @media (max-width: 350px) {
    .contact-greeting {
      padding: 1rem !important;
    }
  }

  .contact-greeting {
    padding: 2rem;
    width: 50%;
    background-color: rgba(255, 255, 255, 0.089);
    padding-top: 4rem;
  }
  p {
    font-size: 1.2rem;
    font-weight: 900;
  }
  svg {
    font-size: 2rem;
    transition: 0.2s;
    color: #ff0b77;
  }
  li {
    list-style-type: none;
    line-height: 1rem;
    font-size: 0.8rem;
  }
  .contact-form {
    width: 50%;
    text-align: center;
  }
  input {
    border-radius: 4px;
    border: none;
    color: black;
    width: 80%;
    margin-top: 1rem;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
  }
  input::placeholder {
    color: black;
  }
  textarea {
    resize: none;
    padding: 0.5rem 0.7rem;
    width: 80%;
    margin-top: 1rem;
    font-size: 0.8rem;
    border: none;
    border-radius: 6px;
  }
  textarea::placeholder {
    padding-left: 5px;
  }
  button {
    margin: 1rem auto;
    display: block;
    width: 50%;
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
  form:first-of-type {
    margin-top: 2rem;
  }
`
const Contact = () => {
  return (
    <ContactCardWrapper>
      <div className="contact-greeting">
        <p>Let's build something beautiful together</p>
        <ul>
          <li> I'm pretty good at Fortnite, too. We can duo if you'd like. </li>
        </ul>
        <RiMailSendLine />
      </div>
      <div className="contact-form">
        <form
          method="post"
          name="contact"
          netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <p class="hidden">
            <input type="hidden" name="bot-field" value="contact" />
          </p>
          <input type="text" required={true} placeholder="Name" name="name" />
          <input
            type="email"
            required={true}
            placeholder="Email"
            name="email"
          />
          <textarea
            name="message"
            required={true}
            placeholder="Some Hopes and Dreams"
            id="message"
            row="5"
          />
          <button type="submit">Send</button>
          {/* <input type="reset" value="Clear" /> */}
        </form>
      </div>
    </ContactCardWrapper>
  )
}

export default Contact
