import styled from 'styled-components'
import { theme } from '../../theme-legacy'
import { unselectable } from '../../utils'
import { ButtonBase } from '../Button/ButtonBase'

const ContextMenuItem = styled(ButtonBase)`
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
