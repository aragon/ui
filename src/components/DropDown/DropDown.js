import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, animated } from 'react-spring'
import ClickOutHandler from 'react-onclickout'
import { theme } from '../../theme'
import { springs, unselectable } from '../../utils/styles'
import { PublicUrl } from '../../providers/PublicUrl'
import DropDownItem from './DropDownItem'

import arrow from './assets/arrow-down.svg'

const NON_BREAKING_SPACE = '\xa0'

const { contentBackground, contentBorder, textPrimary } = theme

const StyledDropDown = styled.div`
  position: relative;
  z-index: ${({ opened }) => (opened ? '2' : '0')};
  display: ${({ wide }) => (wide ? 'flex' : 'inline-flex')};
  flex-direction: column;
  color: ${textPrimary};
  white-space: nowrap;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.03);
  ${unselectable()};
  &:focus {
    outline: 0;
  }
`

const DropDownItems = styled(animated.div)`
  position: absolute;
  z-index: 2;
  top: calc(100% - 1px);
  padding: 8px 0;
  color: ${textPrimary};
  background: ${contentBackground};
  border: 1px solid ${contentBorder};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  list-style: none;
`

const BlockingLayer = styled(animated.div)`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const DropDownActiveItem = styled(PublicUrl.hocWrap(DropDownItem))`
  padding-right: 40px;
  background: ${contentBackground};
  background-image: url(${PublicUrl.styledUrl(arrow)});
  background-repeat: no-repeat;
  background-position: calc(100% - 15px) 50%;
  border: 1px solid ${contentBorder};
  border-radius: 3px;
  &:hover,
  &:focus {
    color: inherit;
  }
  &:active {
    color: ${textPrimary};
  }
`

class DropDown extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.node),
    wide: PropTypes.bool,
    active: PropTypes.number,
    onChange: PropTypes.func,
  }
  static defaultProps = {
    items: [],
    wide: false,
    active: 0,
    onChange: () => {},
  }
  state = {
    opened: false,
  }
  activeItemElt = null

  handleToggle = () => {
    this.setState({ opened: !this.state.opened })
  }
  handleClose = () => {
    this.setState({ opened: false })
  }
  handleItemActivate = (index, { keyboard }) => {
    this.props.onChange(index, this.props.items)
    this.setState({ opened: false })
    if (this.activeItemElt && keyboard) {
      this.activeItemElt.focus()
    }
  }
  render() {
    const { items, active, wide } = this.props
    const { opened } = this.state
    const activeItem = items[active] || items[0]
    return (
      <ClickOutHandler onClickOut={this.handleClose}>
        <StyledDropDown wide={wide} opened={opened}>
          <DropDownActiveItem
            onActivate={this.handleToggle}
            mainRef={el => (this.activeItemElt = el)}
          >
            {activeItem}
          </DropDownActiveItem>
          <Transition
            config={springs.swift}
            from={{ scale: 0.98, opacity: 0, enabled: 1 }}
            enter={{ scale: 1, opacity: 1, enabled: 1 }}
            leave={{ scale: 1, opacity: 0, enabled: 0 }}
            native
          >
            {opened
              ? ({ scale, opacity, enabled }) => (
                  <DropDownItems
                    role="listbox"
                    style={{
                      opacity,
                      transform: scale.interpolate(t => `scale3d(${t},${t},1)`),
                      minWidth: wide ? '100%' : '0',
                    }}
                  >
                    {items.length
                      ? items.map((item, i) => (
                          <DropDownItem
                            role="option"
                            key={i}
                            index={i}
                            active={i === active}
                            onActivate={this.handleItemActivate}
                          >
                            {item}
                          </DropDownItem>
                        ))
                      : NON_BREAKING_SPACE}
                    <BlockingLayer
                      style={{
                        display: enabled.interpolate(
                          t => (t === 1 ? 'none' : 'block')
                        ),
                      }}
                    />
                  </DropDownItems>
                )
              : null}
          </Transition>
        </StyledDropDown>
      </ClickOutHandler>
    )
  }
}

export default DropDown
