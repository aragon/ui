import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { HORIZONTAL_PADDING } from './SidePanel'

const SidePanelSplit = ({ children, ...props }) => (
  <Main {...props}>
    <Part>{children[0]}</Part>
    <Part>{children[1]}</Part>
  </Main>
)

const Main = styled.div`
  display: flex;
  width: calc(100% + ${HORIZONTAL_PADDING * 2}px);
  margin: 0 -${HORIZONTAL_PADDING}px;
  border: 1px solid ${theme.contentBorder};
  border-width: 1px 0;
`

const Part = styled.div`
  width: 50%;
  padding: 20px ${HORIZONTAL_PADDING}px;
  &:first-child {
    border-right: 1px solid ${theme.contentBorder};
  }
`

export default SidePanelSplit
