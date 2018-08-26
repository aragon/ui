import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import ClickOutHandler from 'react-onclickout'
import { theme } from '../../theme'
import { springs, unselectable } from '../../utils/styles'

import Ellipsis from '../../icons/components/Ellipsis'
import ArrowDown from '../../icons/components/ArrowDown'

const BASE_WIDTH = 46
const BASE_HEIGHT = 32

class ContextMenu extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }
  state = {
    opened: false,
  }
  handleClose = () => {
    this.setState({ opened: false })
  }
  handleBaseButtonClick = () => {
    this.setState(({ opened }) => ({ opened: !opened }))
  }
  render() {
    const { opened } = this.state
    const { children } = this.props
    return (
      <ClickOutHandler onClickOut={this.handleClose}>
        <Spring
          config={springs.smooth}
          to={{ openProgress: Number(opened) }}
          native
        >
          {({ openProgress }) => (
            <Main
              opened={opened}
              style={{
                boxShadow: openProgress.interpolate(
                  t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`
                ),
              }}
            >
              <BaseButton onClick={this.handleBaseButtonClick} opened={opened}>
                <span>
                  <Ellipsis
                    style={{
                      color: opened ? theme.accent : theme.textSecondary,
                    }}
                  />
                </span>
                <span>
                  <animated.div
                    style={{
                      color: theme.textTertiary,
                      transform: openProgress.interpolate(
                        t => `rotate(${t * 180}deg)`
                      ),
                    }}
                  >
                    <ArrowDown />
                  </animated.div>
                </span>
              </BaseButton>
              <Popup
                opened={opened}
                onClick={this.handleClose}
                style={{
                  opacity: openProgress,
                  boxShadow: openProgress.interpolate(
                    t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`
                  ),
                }}
              >
                {children}
              </Popup>
            </Main>
          )}
        </Spring>
      </ClickOutHandler>
    )
  }
}

const Main = styled(animated.div)`
  position: relative;
  z-index: ${({ opened }) => (opened ? '2' : '1')};
  width: ${BASE_WIDTH}px;
  height: ${BASE_HEIGHT}px;
`

const BaseButton = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${BASE_HEIGHT}px;
  background: ${theme.contentBackground};
  border: 1px solid ${theme.contentBorder};
  border-radius: ${({ opened }) => (opened ? '3px 3px 0 0' : '3px')};
  border-bottom-color: ${({ opened }) =>
    opened ? theme.contentBackground : theme.contentBorder};
  cursor: pointer;
  ${unselectable()};
  &:active {
    background: ${theme.contentBackgroundActive};
    border-bottom-color: ${({ opened }) =>
      opened ? theme.contentBackgroundActive : theme.contentBorder};
  }
  &:before {
    display: ${({ opened }) => (opened ? 'block' : 'none')};
    content: '';
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 1px;
    height: 2px;
    background: ${theme.contentBorder};
  }
  & > span {
    display: flex;
    align-items: center;
    &:first-child {
      margin-right: 5px;
    }
  }
`

const Popup = styled(animated.div)`
  display: ${({ opened }) => (opened ? 'block' : 'none')};
  overflow: hidden;
  position: absolute;
  top: ${BASE_HEIGHT - 1}px;
  right: 0;
  padding: 10px 0;
  background: ${theme.contentBackground};
  border: 1px solid ${theme.contentBorder};
  border-radius: 3px 0 3px 3px;
`

ContextMenu.BASE_WIDTH = 46
ContextMenu.BASE_HEIGHT = 32

export default ContextMenu
