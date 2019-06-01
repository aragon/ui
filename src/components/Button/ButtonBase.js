import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FocusVisible from '../FocusVisible/FocusVisible'
import { theme } from '../../theme'
import { unselectable, font } from '../../utils/styles'

class ButtonBase extends React.PureComponent {
  static propTypes = {
    focusRingRadius: PropTypes.number,
    focusRingSpacing: PropTypes.number,
    focusVisible: PropTypes.bool,
    innerRef: PropTypes.any,
    showFocusRing: PropTypes.bool,
  }
  static defaultProps = {
    focusRingRadius: 0,
    focusRingSpacing: 0,
    showFocusRing: true,
  }
  render() {
    const {
      focusVisible,
      showFocusRing,
      focusRingSpacing,
      focusRingRadius,
      innerRef,
      ...props
    } = this.props
    return (
      <Main
        ref={innerRef}
        focusRing={focusVisible && showFocusRing}
        focusRingSpacing={focusRingSpacing}
        focusRingRadius={focusRingRadius}
        {...props}
      />
    )
  }
}

const Main = styled.button.attrs({ type: 'button' })`
  position: relative;
  display: inline-block;
  padding: 0;
  white-space: nowrap;
  ${font({ size: 'small', weight: 'normal' })};
  ${unselectable};
  color: ${theme.textSecondary};

  background: none;
  border: 0;
  border-radius: 4px;
  outline: 0;

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &::-moz-focus-inner {
    border: 0;
  }

  &:focus:after {
    content: '';
    position: absolute;
    top: ${p => -p.focusRingSpacing}px;
    left: ${p => -p.focusRingSpacing}px;
    right: ${p => -p.focusRingSpacing}px;
    bottom: ${p => -p.focusRingSpacing}px;
    border-radius: ${p => p.focusRingRadius}px;
    border: ${p => (p.focusRing ? `2px solid ${theme.accent}` : '0')};
  }
`

export default React.forwardRef((props, ref) => (
  <FocusVisible>
    {({ focusVisible, onFocus }) => (
      <ButtonBase
        innerRef={ref}
        onFocus={onFocus}
        focusVisible={focusVisible}
        {...props}
      />
    )}
  </FocusVisible>
))
