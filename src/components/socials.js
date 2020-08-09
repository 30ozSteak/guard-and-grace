import React from "react"
import { Icon } from "@iconify/react"
import koFi from "@iconify/icons-simple-icons/ko-fi"
import githubFilled from "@iconify/icons-ant-design/github-filled"
import twitterOutlined from "@iconify/icons-ant-design/twitter-outlined"

const Socials = () => {
  return (
    <div className="social-links">
      <a href="https://ko-fi.com/Y8Y6213IA">
        <Icon icon={koFi} />
      </a>
      <a href="https://github.com/30ozSteak">
        <Icon icon={githubFilled} />
      </a>
      <a href="https://twitter.com/iaaafm">
        <Icon icon={twitterOutlined} />
      </a>
    </div>
  )
}

export default Socials
