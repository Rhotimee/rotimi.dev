import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import AboutIcon from "../../content/assets/user.svg"
import ProjectsIcon from "../../content/assets/projects.svg"
import NotesIcon from "../../content/assets/edit.svg"
import ContactIcon from "../../content/assets/email.svg"

const SideNavStyles = styled.div`
  height: 100%;
  width: 10rem;
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    background: #222222;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    height: 5.1rem;
    width: 100%;
    justify-content: space-around;

    position: fixed;
    bottom: 0;
    left: 0;
    top: unset;
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
    <Link to="/">
      <AboutIcon />
      <span>ABOUT</span>
    </Link>
    <Link to="/">
      <NotesIcon />
      <span>NOTES</span>
    </Link>
    <Link to="/projects">
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
