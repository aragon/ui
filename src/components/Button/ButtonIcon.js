import React from 'react'
import ButtonBase from './ButtonBase'

class ButtonIcon extends React.PureComponent {
  render() {
    return (
      <ButtonBase
        css={`
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 32px;
          height: 32px;
          &:active {
            background: rgba(220, 234, 239, 0.3);
          }
        `}
        {...this.props}
      />
    )
  }
}

export default ButtonIcon
