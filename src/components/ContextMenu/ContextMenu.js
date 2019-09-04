import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import ClickOutHandler from 'react-onclickout'
import { useTheme } from '../../theme'
import { springs, RADIUS } from '../../style'
import { IconEllipsis, IconDown } from '../../icons/components'
import ButtonBase from '../ButtonBase/ButtonBase'

const BASE_WIDTH = 46
const BASE_HEIGHT = 32

function ContextMenu({ children, zIndex, disabled }) {
  const theme = useTheme()
  const [opened, setOpened] = useState(false)

  const handleClose = useCallback(() => {
    setOpened(false)
  }, [])

  const handleBaseButtonClick = useCallback(() => {
    setOpened(opened => !opened)
  }, [])

  // Increase the z-index on an opened menu, to make sure it's above any other
  // context menus below it using the same z-index (e.g. when used in a list)
  const appliedZIndex = opened ? zIndex + 1 : zIndex

  return (
    <ClickOutHandler onClickOut={handleClose}>
      <Spring
        config={springs.smooth}
        to={{ openProgress: Number(opened) }}
        native
      >
        {({ openProgress }) => (
          <Main
            css={`
              z-index: ${appliedZIndex};
            `}
            style={{
              boxShadow: openProgress.interpolate(
                t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`
              ),
            }}
          >
            <Button
              onClick={handleBaseButtonClick}
              opened={opened}
              disabled={disabled}
              focusRingRadius={RADIUS}
              css={`
                color: ${opened ? theme.accent : theme.surfaceContent};
                background: ${disabled ? theme.surfaceUnder : theme.surface};
                border: 1px solid ${theme.border};
                border-bottom-color: ${opened ? theme.surface : theme.border};
                &:active {
                  background: ${!disabled && theme.surfacePressed};
                  border-bottom-color: ${!disabled &&
                    (opened ? theme.surfacePressed : theme.border)};
                }
              `}
            >
              <IconEllipsis css={``} />
              <animated.div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  transformOrigin: '50% 50%',
                  transform: openProgress.interpolate(
                    v => `rotate(${v * 180}deg)`
                  ),
                }}
              >
                <IconDown size="tiny" />
              </animated.div>
            </Button>
            {opened && (
              <React.Fragment>
                <animated.div
                  onClick={handleClose}
                  style={{
                    opacity: openProgress,
                    boxShadow: openProgress.interpolate(
                      t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`
                    ),
                  }}
                  css={`
                    z-index: ${appliedZIndex + 1};
                    overflow: hidden;
                    position: absolute;
                    top: ${BASE_HEIGHT - 1}px;
                    right: 0;
                    background: ${theme.surface};
                    border: 1px solid ${theme.border};
                    border-radius: 3px 0 3px 3px;
                  `}
                >
                  {children}
                </animated.div>
                <div
                  css={`
                    z-index: ${appliedZIndex + 1};
                    position: absolute;
                    bottom: 0;
                    right: 1px;
                    height: 1px;
                    width: ${BASE_WIDTH - 2}px;
                    background: ${theme.surface};
                  `}
                />
              </React.Fragment>
            )}
          </Main>
        )}
      </Spring>
    </ClickOutHandler>
  )
}

ContextMenu.propTypes = {
  children: PropTypes.node,
  zIndex: PropTypes.number,
  disabled: PropTypes.bool,
}
ContextMenu.defaultProps = {
  zIndex: 0,
  disabled: false,
}

const Main = styled(animated.div)`
  position: relative;
  width: ${BASE_WIDTH}px;
  height: ${BASE_HEIGHT}px;
`

const Button = styled(ButtonBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${BASE_HEIGHT}px;
  border-radius: ${({ opened }) =>
    opened ? `${RADIUS}px ${RADIUS}px 0 0` : `${RADIUS}px`};

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`

export default ContextMenu
