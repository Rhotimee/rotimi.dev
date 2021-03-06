import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import YemitanResume from "../../content/assets/Yemitan-Resume.pdf"

import Layout from "./layout"

const IndexStyles = styled.div`
  max-width: 50rem;
  height: 100%;
  display: flex;
  align-items: center;

  h2 {
    margin-top: 1.5rem;
    color: #d8d8d9;
  }

  p {
    margin-top: 1.75rem 0;
    color: #b3b1b5;
  }

  .image-container {
    width: 20rem;
    height: 100%;
    flex: 0 0 auto;
    margin-right: 2rem;
  }

  .links {
    * {
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .image-container {
      width: 100%;
      height: 100%;
      flex: 0 0 auto;
      margin-right: 0;
    }
  }
`

const Index = () => {
  const { site, file } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }

        file(relativePath: { eq: "rotimi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const { author } = site.siteMetadata
  const { fluid } = file.childImageSharp

  return (
    <Layout>
      <IndexStyles>
        <div className="image-container">
          <Img fluid={fluid} />
        </div>
        <div>
          <h2>Hi 👋🏽, I'm {author}.</h2>
          <p>
            I'm a Fullstack engineer who is passionate about building products
            and solving problems.
          </p>
          <p>
            I am experienced in using Web technologies, Cloud and Machine
            learning to build, scale and deploy solutions.
          </p>
          <div className="links">
            <a target="_blank" href="https://github.com/rhotimee">
              github
            </a>
            <a target="_blank" href="https://twitter.com/rhotimee">
              twitter
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rotimi-yemitan/"
            >
              linkedin
            </a>
            <a href={YemitanResume} download>
              Resume
            </a>
            <Link to="#">blog</Link>
          </div>
        </div>
      </IndexStyles>
    </Layout>
  )
}

export default Index
