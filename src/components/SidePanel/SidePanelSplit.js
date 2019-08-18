import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useTheme } from '../../theme'
import SidePanel from './SidePanel'

function SidePanelSplit({ children, ...props }) {
  const theme = useTheme()
  return (
    <div
      css={`
        display: flex;
        width: calc(100% + ${SidePanel.HORIZONTAL_PADDING * 2}px);
        margin: 0 -${SidePanel.HORIZONTAL_PADDING}px;
        padding: ${SidePanel.HORIZONTAL_PADDING}px;
      `}
      {...props}
    >
      <Part>{children[0]}</Part>
      <div
        css={`
          display: inline-block;
          border-right: 1px solid ${theme.border};
          margin: -${SidePanel.HORIZONTAL_PADDING}px ${SidePanel.HORIZONTAL_PADDING}px;
        `}
      />
      <Part>{children[1]}</Part>
    </div>
  )
}

SidePanelSplit.propTypes = {
  children: PropTypes.node,
}

const Part = styled.div`
  width: 50%;
`

export default SidePanelSplit
