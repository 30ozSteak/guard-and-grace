import React from "react"
import styled from "styled-components"
import { Icon, InlineIcon } from "@iconify/react"
import koFi from "@iconify/icons-simple-icons/ko-fi"

const ButtonWrapper = styled.button`
    margin: 1rem auto;
    display: flex;
    width: 100%;
    justify-content: center;
    border-radius: 30px;
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1.2rem;
    color: white;
    border: 2px solid #ff0b77;
    background-color: transparent;
    transition: 0.2s;
    margin-right: 10rem;
  }
  :hover {
    background-color: #ff0b77;
  }

  :active{
    transform: scale(.9)
  }
  a{
    color: white !important;
    margin: .2rem 1rem !important;
    margin-top: 5px;
    padding: 0 1rem;
  }

  svg{
    font-size: 24px;
    transform: translate(-50%, -50%);
    margin-top: 5px;
  }
`
const Button = () => {
  return (
    <ButtonWrapper>
      <a href="https://ko-fi.com/Y8Y6213IA" target="_blank">
        <Icon icon={koFi} />
      </a>
    </ButtonWrapper>
  )
}

export default Button
