import React from "react"
import styled from "@emotion/styled"
import AboutIcon from "../../content/assets/user.svg"
import ProjectsIcon from "../../content/assets/projects.svg"
import NotesIcon from "../../content/assets/edit.svg"
import ContactIcon from "../../content/assets/email.svg"

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
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d8d8d9;
  margin: 1.5rem 0;
  cursor: pointer;

  svg {
    fill: #fff;
    height: 16px;
    width: 16px;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.7rem;
  }
`

const SideNav = () => (
  <SideNavStyles>
    <Nav>
      <AboutIcon />
      <span>ABOUT</span>
    </Nav>
    <Nav>
      <NotesIcon />
      <span>NOTES</span>
    </Nav>
    <Nav>
      <ProjectsIcon />
      <span>PROJECTS</span>
    </Nav>
    <Nav>
      <ContactIcon />
      <span>CONTACT</span>
    </Nav>
  </SideNavStyles>
)

export default SideNav
