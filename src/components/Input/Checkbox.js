import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'
import { IconCheck } from '../../icons'
import theme from '../../theme'
import { springs, noop } from '../../utils'
import FocusVisible from '../FocusVisible/FocusVisible'

class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
  }
  static defaultProps = {
    checked: false,
    indeterminate: false,
    onChange: noop,
  }
  getAriaChecked() {
    const { checked, indeterminate } = this.props
    if (indeterminate) return 'mixed'
    if (checked) return 'true'
    return 'false'
  }
  handleClick = () => {
    const { onChange, checked, indeterminate } = this.props
    onChange(indeterminate ? false : !checked)
  }
  renderCheck(visible, node) {
    return (
      <Transition
        items={visible}
        from={{ progress: 0 }}
        enter={{ progress: 1 }}
        leave={{ progress: 0 }}
        config={springs.instant}
        native
      >
        {visible =>
          visible &&
          (({ progress }) => (
            <CheckWrapper
              style={{
                opacity: progress,
                transform: progress.interpolate(v => `scale3d(${v}, ${v}, 1)`),
              }}
            >
              {node}
            </CheckWrapper>
          ))
        }
      </Transition>
    )
  }
  render() {
    const { checked, indeterminate, focusVisible, ...props } = this.props
    return (
      <FocusVisible>
        {({ focusVisible, onFocus }) => (
          <Main
            role="checkbox"
            tabIndex="0"
            aria-checked={this.getAriaChecked()}
            onClick={this.handleClick}
            focusVisible={focusVisible}
            onFocus={onFocus}
            {...props}
          >
            {this.renderCheck(checked, <Check />)}
            {this.renderCheck(indeterminate, <Dash />)}
            <FocusRing />
          </Main>
        )}
      </FocusVisible>
    )
  }
}

const FocusRing = styled.span`
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px solid ${theme.accent};
  border-radius: 3px;
  display: none;
`

const Main = styled.button.attrs({ type: 'button' })`
  display: inline-flex;
  position: relative;
  width: 14px;
  height: 14px;
  margin: 5px;
  background: #f3f9fb;
  border: 1px solid #daeaef;
  border-radius: 3px;
  outline: 0;
  padding: 0;
  cursor: pointer;
  &:active {
    border-color: #c9d9de;
  }
  &:focus ${FocusRing} {
    display: ${p => (p.focusVisible ? 'block' : 'none')};
  }
  &::-moz-focus-inner {
    border: 0;
  }
`

const CheckWrapper = styled(animated.span)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Check = styled(IconCheck)`
  /* Use a filter to make it black, until we have a color system for icons */
  filter: brightness(0);
  transform-origin: 50% 50%;
  transform: scale(0.9);
`

const Dash = styled.span`
  display: block;
  width: 8px;
  background: #000;
  /* Chrome doesn’t support subpixels so we have to use a transform */
  height: 3px;
  transform: scaleY(0.4);
`

export default Checkbox
