import React from 'react'
import { useTheme } from '../../theme'
import SidePanel from './SidePanel'

function SidePanelSeparator(props) {
  const theme = useTheme()
  return (
    <div
      css={`
        width: calc(100% + ${SidePanel.HORIZONTAL_PADDING * 2}px);
        margin: 0 -${SidePanel.HORIZONTAL_PADDING}px;
        height: 1px;
        background: ${theme.border};
      `}
      {...props}
    />
  )
}

export default SidePanelSeparator
