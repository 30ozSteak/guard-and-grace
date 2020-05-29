import React, { useState } from "react"
import styled from "styled-components"

const Contact = () => {
  return (
    <form method="post" netlify-honeypot="bot-field" data-netlify="true">
      <input type="hidden" name="bot-field" />
      <label>Name</label>
      <label>Email</label>
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
