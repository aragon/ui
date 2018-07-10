import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { theme } from '../../theme'

const NON_BREAKING_SPACE = '\xa0'

const { accent, contentBackgroundActive } = theme

class DropDownItem extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    index: PropTypes.number,
    mainRef: PropTypes.func,
    onActivate: PropTypes.func,
    className: PropTypes.string,
  }
  static defaultProps = {
    children: NON_BREAKING_SPACE,
    mainRef: () => {},
    className: '',
  }
  state = {
    pressed: false,
    displayFocus: false,
  }
  handleActivate = event => {
    const keyboard = event.type === 'keydown'
    if (keyboard && event.keyCode !== 13) {
      return
    }
    this.props.onActivate(this.props.index, { keyboard })
  }
  handleMouseDown = () => {
    this.setState({ pressed: true })
  }
  handleMouseUp = () => {
    this.setState({ pressed: false })
  }
  handleFocus = () => {
    this.setState({ displayFocus: !this.state.pressed })
  }
  render() {
    const { children, className, mainRef, active } = this.props
    const { displayFocus } = this.state
    return (
      <StyledDropDownItem
        innerRef={mainRef}
        className={className}
        active={active}
        displayFocus={displayFocus}
        onClick={this.handleActivate}
        onKeyDown={this.handleActivate}
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onFocus={this.handleFocus}
      >
        {children}
      </StyledDropDownItem>
    )
  }
}

const StyledDropDownItem = styled.div.attrs({ tabIndex: '0' })`
  position: relative;
  padding: 8px 15px;
  cursor: pointer;
  outline: 0;
  &:after {
    content: '';
    opacity: 0;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -1px -2px;
    border: 2px solid ${accent};
    transition: all 100ms ease-in-out;
  }
  &:active {
    background-color: ${contentBackgroundActive};
  }
  &:hover,
  &:focus {
    color: ${accent};
  }
  &:focus:after {
    opacity: ${({ displayFocus }) => (displayFocus ? 1 : 0)};
  }
`

export default DropDownItem
