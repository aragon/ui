import styled from 'styled-components'
import { theme } from '../../theme'
import { unselectable } from '../../utils/styles'

const ContextMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  cursor: pointer;
  white-space: nowrap;
  ${unselectable()};
  &:active {
    background: ${theme.contentBackgroundActive};
  }
`

export default ContextMenuItem
