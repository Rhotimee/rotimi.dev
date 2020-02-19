import React from "react"
import styled from "@emotion/styled"
import SideNav from "./SideNav"

const LayoutStyles = styled.div`
  background: #121212;
  color: #b3b1b5;
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;

  main {
    margin: auto;
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    height: calc(100vh - 5rem);
    width: 100%;
  }
`
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <LayoutStyles>
        <SideNav />
        <main>{children}</main>
      </LayoutStyles>
    )
  }
}

export default Layout
