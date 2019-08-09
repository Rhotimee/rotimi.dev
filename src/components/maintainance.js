import React from 'react'
import styled from '@emotion/styled'

const MaintainanceStyles = styled.div`
  padding: 2rem;
  background-color: #121212;
  color: #fff;
  height: 100vh;
  width: 100vw;
`

const Maintainance = () => {
  return (
    <MaintainanceStyles>
      <h2>Site Under Construction</h2>
      <p>Check back later, thanks.</p>
    </MaintainanceStyles>
  )
}

export default Maintainance
