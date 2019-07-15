import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import ClickOutHandler from 'react-onclickout'
import { useTheme } from '../../theme'
import { springs, RADIUS } from '../../style'
import { IconEllipsis, IconDown } from '../../icons/components'
import { ButtonBase } from '../Button/ButtonBase'

const BASE_WIDTH = 46
const BASE_HEIGHT = 32

function ContextMenu({ children }) {
  const theme = useTheme()
  const [opened, setOpened] = useState(false)

  const handleClose = useCallback(() => {
    setOpened(false)
  }, [])

  const handleBaseButtonClick = useCallback(() => {
    setOpened(opened => !opened)
  }, [])

  return (
    <ClickOutHandler onClickOut={handleClose}>
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
            <Button
              onClick={handleBaseButtonClick}
              opened={opened}
              focusRingRadius={RADIUS}
              css={`
                color: ${opened ? theme.accent : theme.surfaceContent};
                background: ${theme.surface};
                border: 1px solid ${theme.border};
                border-bottom-color: ${opened ? theme.surface : theme.border};
                &:active {
                  background: ${theme.surfacePressed};
                  border-bottom-color: ${opened
                    ? theme.surfacePressed
                    : theme.border};
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
              <animated.div
                onClick={handleClose}
                style={{
                  opacity: openProgress,
                  boxShadow: openProgress.interpolate(
                    t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`
                  ),
                }}
                css={`
                  overflow: hidden;
                  position: absolute;
                  top: ${BASE_HEIGHT - 1}px;
                  right: 0;
                  z-index: 3;
                  padding: 10px 0;
                  background: ${theme.surface};
                  border: 1px solid ${theme.border};
                  border-radius: 3px 0 3px 3px;
                `}
              >
                {children}
              </animated.div>
            )}
          </Main>
        )}
      </Spring>
    </ClickOutHandler>
  )
}

ContextMenu.propTypes = {
  children: PropTypes.node,
}

const Main = styled(animated.div)`
  position: relative;
  width: ${BASE_WIDTH}px;
  height: ${BASE_HEIGHT}px;
`

const Button = styled(ButtonBase)`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${BASE_HEIGHT}px;
  border-radius: ${({ opened }) =>
    opened ? `${RADIUS}px ${RADIUS}px 0 0` : `${RADIUS}px`};

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`

ContextMenu.BASE_WIDTH = 46
ContextMenu.BASE_HEIGHT = 32

export default ContextMenu
