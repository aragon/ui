import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import ClickOutHandler from 'react-onclickout'
import { theme } from '../../theme'
import { springs, unselectable } from '../../utils/styles'
import { lerp } from '../../utils/math'
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
  display: ${({ opened }) => (opened ? 'block' : 'none')};
  min-width: ${({ wide }) => (wide ? '100%' : '0')};
  padding: 8px 0;
  z-index: ${({ opened }) => (opened ? '2' : '1')};
  top: calc(100% - 1px);
  color: ${textPrimary};
  background: ${contentBackground};
  border: 1px solid ${contentBorder};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06);
  border-radius: 3px;
  list-style: none;
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
    items: PropTypes.arrayOf(PropTypes.string),
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
          <Spring
            config={springs.normal}
            to={{
              openProgress: Number(opened),
              closeProgress: Number(opened),
            }}
            native
          >
            {({ openProgress, closeProgress }) => {
              const transform = openProgress.interpolate((t) => {
                const scale = opened ? lerp(t, 0.98, 1) : 1
                return `scale(${scale},${scale})`
              })
              
              return (
                <DropDownItems
                  role="listbox"
                  opened={opened}
                  wide={wide}
                  style={{
                    transform,
                    opacity: opened ? openProgress : closeProgress,
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
                </DropDownItems>
              )
            }}
          </Spring>
        </StyledDropDown>
      </ClickOutHandler>
    )
  }
}

export default DropDown
