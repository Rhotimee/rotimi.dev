import React from 'react'
import styled from '@emotion/styled'
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Github from '../../content/assets/github.svg'
import LinkedIn from '../../content/assets/linkedin.svg'
import Nigeria from '../../content/assets/nigeria.svg'
import Twitter from '../../content/assets/twitter.svg'


const IndexStyles = styled.div`
  .header {
    min-height: 45vh;
    background: lightblue;

    .nav {
      display: flex;
      justify-content: flex-end;
      padding: 1rem;

      .top-icons {
        display: flex;
        justify-content: flex-end;
        svg {
          margin: 0 .8rem;
          height: 25px;
          width: 25px;
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 5rem;

      .bio {
        border-radius: 50%;
        height: 3rem;
        width: 3rem;
      }
    }
    .sec-nav {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
`;
 
const Index = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

   return (
     <IndexStyles>
       <div className="header">
          <div className="nav">
            <div className="top-icons">
              <Github />
              <LinkedIn />
              <Twitter />
              <Nigeria />
            </div>
          </div>
          <div className="info">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              className="bio"
            />
            <h2>{author}</h2>
            <div>Software and Machine Learning Engineer</div>
          </div>
          <div className="sec-nav">
            <span>about me</span>
            <span>portfolio</span>
            <span>resume</span>
            <span>contact</span>
            <span>blog</span>
          </div>
       </div>
     </IndexStyles>
   )
 }
 

 export default Index