import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../../theme'
import SidePanel from './SidePanel'

const SidePanelSplit = ({ children, ...props }) => (
  <Main {...props}>
    <Part>{children[0]}</Part>
    <Part>{children[1]}</Part>
  </Main>
)

SidePanelSplit.propTypes = {
  children: PropTypes.node,
}

const Main = styled.div`
  display: flex;
  width: calc(100% + ${SidePanel.HORIZONTAL_PADDING * 2}px);
  margin: 0 -${SidePanel.HORIZONTAL_PADDING}px;
  border: 1px solid ${theme.contentBorder};
  border-width: 1px 0;
`

const Part = styled.div`
  width: 50%;
  padding: 20px ${SidePanel.HORIZONTAL_PADDING}px;
  &:first-child {
    border-right: 1px solid ${theme.contentBorder};
  }
`

export default SidePanelSplit
