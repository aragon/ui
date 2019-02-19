import React from 'react'
import { ButtonIcon } from '../'
import { IconMenu } from '../../icons'

export default props => (
  <ButtonIcon
    {...props}
    css={`
      width: auto;
      height: 100%;
      padding: 0 10px 0 20px;
      margin-right: 8px;
    `}
  >
    <IconMenu />
  </ButtonIcon>
)
