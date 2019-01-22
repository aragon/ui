import React from 'react'
import ButtonBase from './ButtonBase'

class ButtonIcon extends React.PureComponent {
  render() {
    return (
      <ButtonBase
        css={`
          width: 22px;
          height: 22px;
        `}
        {...this.props}
      />
    )
  }
}

export default ButtonIcon
