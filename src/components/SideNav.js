import React from "react"
import styled from "@emotion/styled"
import AboutIcon from "../../content/assets/user.svg"
import ProjectsIcon from "../../content/assets/projects.svg"
import NotesIcon from "../../content/assets/edit.svg"
import ContactIcon from "../../content/assets/email.svg"
import { Link } from "gatsby"

const SideNavStyles = styled.div`
  margin: auto 0 auto 2rem;

  @media screen and (max-width: 768px) {
    background: #222222;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;

    position: fixed;
    bottom: 0;
    left: 0;
  }

  a {
    box-shadow: none;
    color: #d8d8d9;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.2rem 0;
    svg {
      fill: #fff;
      height: 16px;
      width: 16px;
      margin-bottom: 0.5rem;
    }

    span {
      font-size: 0.7rem;
    }
  }
`

const SideNav = () => (
  <SideNavStyles>
    <Link to="about">
      <AboutIcon />
      <span>ABOUT</span>
    </Link>
    <Link to="/">
      <NotesIcon />
      <span>NOTES</span>
    </Link>
    <Link to="/">
      <ProjectsIcon />
      <span>PROJECTS</span>
    </Link>
    <Link to="contact">
      <ContactIcon />
      <span>CONTACT</span>
    </Link>
  </SideNavStyles>
)

export default SideNav
