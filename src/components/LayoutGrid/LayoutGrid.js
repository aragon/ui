import React from 'react'
import styled from 'styled-components'
import { grid } from '../..'

const Container = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  width: ${grid(12)}px;
  margin: 0 auto;
  pointerevents: none;
`

const Column = styled.div`
  width: ${grid(1)}px;
  height: 100%;
  background: rgba(184, 184, 184, 0.5);
`

const LayoutGrid = () => (
  <Container>
    {[...Array(12)].map((v, i, arr) => (
      <div
        key={i}
        style={{ width: grid(1, i < arr.length - 1 ? 1 : 0) + 'px' }}
      >
        <Column />
      </div>
    ))}
  </Container>
)

export default LayoutGrid
