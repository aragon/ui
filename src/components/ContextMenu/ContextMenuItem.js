import React from 'react'
import { textStyle } from '../../style'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'
import { ButtonBase } from '../Button/ButtonBase'

const ContextMenuItem = React.memo(function ContextMenuItem(props) {
  const theme = useTheme()
  return (
    <ButtonBase
      css={`
        display: flex;
        align-items: center;
        padding: 5px 16px 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        width: 100%;
        ${textStyle('body2')}
        ${unselectable()};
        &:active {
          background: ${theme.surfacePressed};
        }
      `}
      {...props}
    />
  )
})

export default ContextMenuItem
