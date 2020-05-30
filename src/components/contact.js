import React from "react"
// import styled from "styled-components"

const Contact = () => {
  return (
    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="name" />
      </label>
      <label>
        Message
        <textarea name="message" id="message" row="5" />
      </label>
      <button type="submit">Send</button>
      <input type="reset" value="Clear" />
    </form>
  )
}

export default Contact
