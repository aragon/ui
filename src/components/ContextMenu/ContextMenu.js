import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import ClickOutHandler from 'react-onclickout'
import { theme } from '../../theme'
import { springs, unselectable } from '../../utils/styles'
import { IconEllipsis, IconArrowDown } from '../../icons/components'

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
              style={{
                zIndex: opened ? '2' : '1',
                boxShadow: openProgress.interpolate(
                  t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`
                ),
              }}
            >
              <BaseButton onClick={this.handleBaseButtonClick} opened={opened}>
                <IconEllipsis
                  css={`
                    position: relative;
                    left: 4.5px;
                    width: 22px;
                  `}
                  style={{
                    color: opened ? theme.accent : theme.textSecondary,
                  }}
                />
                <Arrow
                  style={{
                    transformOrigin: '10px 9.5px',
                    transform: openProgress.interpolate(
                      v => `rotate(${v * 180}deg)`
                    ),
                  }}
                >
                  <IconArrowDown />
                </Arrow>
              </BaseButton>
              {opened && (
                <Popup
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
              )}
            </Main>
          )}
        </Spring>
      </ClickOutHandler>
    )
  }
}

const Arrow = styled(animated.div)`
  margin-top: 10px;
  transform-origin: 10px 9.5px;
  color: ${theme.textTertiary};
`

const Main = styled(animated.div)`
  position: relative;
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
`

const Popup = styled(animated.div)`
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
