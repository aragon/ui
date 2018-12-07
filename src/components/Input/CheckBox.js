import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import { IconCheck } from '../../icons'
import theme from '../../theme'
import { springs } from '../../utils'

class CheckBox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    mixed: PropTypes.bool,
    variant: PropTypes.oneOf(['checkbox', 'radio']),
  }
  static defaultProps = {
    checked: false,
    mixed: false,
    variant: 'checkbox',
  }
  getAriaChecked() {
    const { checked, mixed } = this.props
    if (mixed) return 'mixed'
    if (checked) return 'true'
    return 'false'
  }
  handleClick = () => {
    this.props.onChange(!this.props.checked)
  }
  render() {
    const { checked, mixed, variant } = this.props
    return (
      <Main
        role={variant}
        tabIndex="0"
        aria-checked={this.getAriaChecked()}
        onClick={this.handleClick}
      >
        <Spring
          from={{ progress: 0 }}
          to={{ progress: Boolean(checked) }}
          config={springs.instant}
          native
        >
          {({ progress }) => (
            <AnimatedWrapper
              style={{
                opacity: progress,
                transform: progress.interpolate(v => `scale(${v})`),
              }}
            >
              {variant === 'radio' ? <Bullet /> : <Check />}
            </AnimatedWrapper>
          )}
        </Spring>
        <FocusRing variant={variant} />
      </Main>
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
    display: block;
  }
  &:focus:not(:focus-visible) ${FocusRing} {
    display: none;
  }
  &:focus-visible ${FocusRing} {
    display: block;
  }
  &::-moz-focus-inner {
    border: 0;
  }
`

const AnimatedWrapper = styled(animated.span)`
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

const Bullet = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${theme.accent};
`

export default CheckBox
