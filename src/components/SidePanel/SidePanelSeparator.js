import styled from 'styled-components'
import { theme } from '../../theme'
import SidePanel from './SidePanel'

const SidePanelSeparator = styled.div`
  width: calc(100% + ${SidePanel.HORIZONTAL_PADDING * 2}px);
  margin: 0 -${SidePanel.HORIZONTAL_PADDING}px;
  height: 1px;
  background: ${theme.contentBorder};
`

export default SidePanelSeparator
