import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Toggle from "./Toggle"
import SideNav from "./SideNav"

const LayoutStyles = styled.div`
  background: #121212;
  color: #bb86fc;
  position: relative;
  height: 100vh;
  width: 100%;

  main {
    margin: auto;
  }
`

const SideChild = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <LayoutStyles>
        {/* <Toggle /> */}
        <SideChild>
          <SideNav />
          <main>{children}</main>
        </SideChild>
      </LayoutStyles>
    )
  }
}

export default Layout
