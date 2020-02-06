import React from "react"
import Layout from "./layout"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Twitter from "../../content/assets/twitter.svg"
import LinkedIn from "../../content/assets/linkedin.svg"
import Github from "../../content/assets/github.svg"

const ContactStyles = styled.div`
  a {
    box-shadow: none;
    margin-right: 1rem;

    svg {
      fill: #fff;
      height: 24px;
      width: 24px;
    }
  }

  .links {
    display: flex;
  }
`

export default function contact() {
  return (
    <Layout>
      <ContactStyles>
        <h2>
          Don't be a stranger <br /> just say hello.
        </h2>
        <p>
          Feel free to get in touch with me. <br />
          I'm always open to discussing ideas, projects or opportunities.
        </p>
        <h4>
          <a href="mailto:yemitanisaiah@gmail.com?Subject=Hello">
            yemitanisaiah@gmail.com
          </a>
        </h4>
        <div className="links">
          <a target="_blank" href="https://github.com/rhotimee">
            <Github />
          </a>
          <a target="_blank" href="https://twitter.com/rhotimee">
            <Twitter />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/rotimi-yemitan/">
            <LinkedIn />
          </a>
          {/* <Link to="#">resume</Link>
          <Link to="notes">blog</Link> */}
        </div>
      </ContactStyles>
    </Layout>
  )
}
