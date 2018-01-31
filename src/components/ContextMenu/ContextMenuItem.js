import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { unselectable } from '../../shared-styles'
import { BASE_WIDTH } from './ContextMenu'

const ContextMenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 20px;
  cursor: pointer;
  ${unselectable()};
  &:first-child {
    padding-top: 15px;
  }
  &:last-child {
    padding-bottom: 15px;
  }
  &:active {
    background: ${theme.contentBackgroundActive};
  }
  & > svg {
    margin-right: 15px;
  }
`

export default ContextMenuItem
