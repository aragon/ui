import React from 'react'
import PropTypes from 'prop-types'
import { Spring, animated } from 'react-spring'
import { useTheme } from '../../theme'
import { noop } from '../../utils'
import { springs, RADIUS } from '../../style'
import FocusVisible from '../FocusVisible/FocusVisible'

class Checkbox extends React.PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.string,
    theme: PropTypes.object,
    variant: PropTypes.oneOf(['checkbox', 'radio']),
  }
  static defaultProps = {
    checked: false,
    indeterminate: false,
    onChange: noop,
    tabIndex: '0',
    variant: 'checkbox',
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
          <animated.span
            css={`
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              transform-origin: 50% 50%;
            `}
            style={{
              opacity: progress,
              transform: progress.interpolate(v => `scale(${v})`),
            }}
          >
            {node}
          </animated.span>
        )}
      </Spring>
    )
  }
  render() {
    const {
      checked,
      indeterminate,
      tabIndex,
      theme,
      variant,
      ...props
    } = this.props
    return (
      <FocusVisible>
        {({ focusVisible, onFocus }) => (
          <button
            type="button"
            ref={this._element}
            role={variant}
            tabIndex={tabIndex}
            aria-checked={this.getAriaChecked()}
            onClick={this.handleClick}
            focusVisible={focusVisible}
            onFocus={onFocus}
            css={`
              display: inline-flex;
              position: relative;
              width: 16px;
              height: 16px;
              margin: 4px;
              background: ${theme.control};
              border: 1px solid ${theme.controlBorder};
              border-radius: ${p => (p.role === 'radio' ? '50%' : '2px')};
              outline: 0;
              padding: 0;
              cursor: pointer;
              &:active {
                border-color: ${theme.controlBorderPressed};
              }
              &:focus .focus-ring {
                display: ${p => (p.focusVisible ? 'block' : 'none')};
              }
              &::-moz-focus-inner {
                border: 0;
              }
            `}
            {...props}
          >
            {variant === 'checkbox' &&
              this.renderCheck(
                checked && !indeterminate,
                <Check color={theme.selected} />
              )}
            {variant === 'checkbox' &&
              this.renderCheck(indeterminate, <Dash color={theme.selected} />)}
            {variant === 'radio' &&
              this.renderCheck(checked, <Bullet color={theme.selected} />)}

            <span
              className="focus-ring"
              css={`
                position: absolute;
                top: -2px;
                left: -2px;
                right: -2px;
                bottom: -2px;
                border: 2px solid ${theme.focus};
                border-radius: ${variant === 'radio' ? '50%' : `${RADIUS}px`};
                display: none;
              `}
            />
          </button>
        )}
      </FocusVisible>
    )
  }
}

/* eslint-disable react/prop-types */

const Dash = ({ color }) => (
  /* Use SVG to have subpixels (strokeWidth="1.5") on Chrome */
  <svg width="14" height="14" viewBox="0 0 14 14">
    <line x1="3" y1="7" x2="11" y2="7" stroke={color} strokeWidth="1.5" />
  </svg>
)

const Check = ({ color }) => (
  <svg width="12" height="8" viewBox="0 0 12 8">
    <path
      d={`
        M11.059 1.393
        L4.335  7.395
        L0.944  3.260
        L2.104  2.309
        L4.503  5.234
        L10.060 0.274
        L11.059 1.393
        Z
      `}
      fill={color}
    />
  </svg>
)

const Bullet = ({ color }) => (
  <span
    css={`
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${color};
    `}
  />
)

const CheckBoxWithTheme = React.forwardRef((props, ref) => {
  const theme = useTheme()
  return <Checkbox theme={theme} ref={ref} {...props} />
})

/* eslint-enable react/prop-types */

export { CheckBoxWithTheme as Checkbox }
export default CheckBoxWithTheme
