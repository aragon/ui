import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { HORIZONTAL_PADDING } from './SidePanel'

const SidePanelSeparator = styled.div`
  width: calc(100% + ${HORIZONTAL_PADDING * 2}px);
  margin: 0 -${HORIZONTAL_PADDING}px;
  height: 1px;
  background: ${theme.contentBorder};
`

export default SidePanelSeparator
