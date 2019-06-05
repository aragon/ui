import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import { IconCheck } from '../../icons/components'
import { theme } from '../../theme-legacy'
import { springs, noop } from '../../utils'
import FocusVisible from '../FocusVisible/FocusVisible'

class Checkbox extends React.PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    variant: PropTypes.oneOf(['checkbox', 'radio']),
    tabIndex: PropTypes.string,
  }
  static defaultProps = {
    checked: false,
    indeterminate: false,
    onChange: noop,
    variant: 'checkbox',
    tabIndex: '0',
  }
  _element = React.createRef()
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
  focus = () => {
    this._element.current.focus()
  }
  renderCheck(visible, node) {
    return (
      <Spring
        from={{ progress: 0 }}
        to={{ progress: Number(visible) }}
        config={springs.instant}
        native
      >
        {({ progress }) => (
          <CheckWrapper
            style={{
              opacity: progress,
              transform: progress.interpolate(v => `scale(${v})`),
            }}
          >
            {node}
          </CheckWrapper>
        )}
      </Spring>
    )
  }
  render() {
    const { checked, indeterminate, variant, tabIndex, ...props } = this.props
    return (
      <FocusVisible>
        {({ focusVisible, onFocus }) => (
          <Main
            ref={this._element}
            role={variant}
            tabIndex={tabIndex}
            aria-checked={this.getAriaChecked()}
            onClick={this.handleClick}
            focusVisible={focusVisible}
            onFocus={onFocus}
            {...props}
          >
            {variant === 'checkbox' &&
              this.renderCheck(checked && !indeterminate, <Check />)}
            {variant === 'checkbox' &&
              this.renderCheck(indeterminate, <Dash />)}
            {variant === 'radio' && this.renderCheck(checked, <Bullet />)}
            <FocusRing variant={variant} />
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
  border-radius: ${p => (p.variant === 'radio' ? '50%' : '3px')};
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
  border-radius: ${p => (p.role === 'radio' ? '50%' : '3px')};
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
  transform-origin: 50% 50%;
`

const Check = styled(IconCheck)`
  /* Use a filter to make it black, until we have a color system for icons */
  filter: brightness(0);
  transform-origin: 50% 50%;
  transform: scale(0.88);
`

const Dash = () => (
  /* Use SVG to have subpixels (1.5 storke width) on Chrome */
  <svg width="14" height="14" viewBox="0 0 14 14">
    <line x1="3" y1="7" x2="11" y2="7" stroke="black" strokeWidth="1.5" />
  </svg>
)

const Bullet = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${theme.accent};
`

export default Checkbox
