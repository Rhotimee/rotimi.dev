import React from "react"
import styled from "@emotion/styled"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "./Layout"

const IndexStyles = styled.div`
  max-width: 50rem;
  height: 100%;
  display: flex;
  align-items: center;

  h2 {
    margin-top: 1.5rem;
  }

  p {
    margin-top: 1.75rem 0;
  }

  .image-container {
    width: 20rem;
    height: 100%;
    flex: 0 0 auto;
    margin-right: 2rem;
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
            Right now, he work's with Openinvest whose mission is to use
            technology to bring honesty and transparency to financial services.
          </p>
        </div>
      </IndexStyles>
    </Layout>
  )
}

export default Index
