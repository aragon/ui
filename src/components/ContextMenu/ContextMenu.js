import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Spring, animated } from 'react-spring'
import { useTheme } from '../../theme'
import { springs, RADIUS } from '../../style'
import { IconEllipsis, IconDown } from '../../icons/components'
import ButtonBase from '../ButtonBase/ButtonBase'
import Popover from '../Popover/Popover'

const BASE_WIDTH = 46
const BASE_HEIGHT = 32

function ContextMenu({ children, zIndex, disabled }) {
  const theme = useTheme()
  const [opened, setOpened] = useState(false)
  const buttonRef = useRef()

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
    <React.Fragment>
      <Spring
        config={springs.smooth}
        to={{ openProgress: Number(opened) }}
        native
      >
        {({ openProgress }) => (
          <animated.div
            ref={buttonRef}
            css={`
              position: relative;
              width: ${BASE_WIDTH}px;
              height: ${BASE_HEIGHT}px;
              z-index: ${appliedZIndex};
            `}
            style={{
              boxShadow: openProgress.interpolate(
                t => `0 4px 4px rgba(0, 0, 0, ${t * 0.03})`
              ),
            }}
          >
            <ButtonBase
              onClick={handleBaseButtonClick}
              opened={opened}
              disabled={disabled}
              focusRingRadius={RADIUS}
              css={`
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: ${BASE_HEIGHT}px;
                border-radius: ${({ opened }) =>
                  opened ? `${RADIUS}px ${RADIUS}px 0 0` : `${RADIUS}px`};

                box-shadow: ${({ disabled }) =>
                  disabled ? 'none' : `0px 1px 3px rgba(0, 0, 0, 0.1)`};

                color: ${disabled
                  ? theme.disabledContent
                  : opened
                  ? theme.accent
                  : theme.surfaceContent};
                background: ${disabled ? theme.disabled : theme.surface};
                border: ${disabled ? '0' : `1px solid ${theme.border}`};
                ${disabled
                  ? ''
                  : `
                      &:active {
                        background: ${theme.surfacePressed};
                        border-bottom-color: ${
                          opened ? 'transparent' : theme.border
                        };
                      }
                    `}
              `}
            >
              <IconEllipsis />
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
                <IconDown
                  size="tiny"
                  css={`
                    color: ${disabled
                      ? theme.disabledIcon
                      : opened
                      ? theme.accent
                      : theme.surfaceIcon};
                  `}
                />
              </animated.div>
            </ButtonBase>
          </animated.div>
        )}
      </Spring>
      <Popover
        closeOnOpenerFocus={true}
        onClose={handleClose}
        opener={buttonRef.current}
        placement="bottom-end"
        scaleEffect={false}
        visible={opened}
        css={`
          overflow: visible;
          border-top-right-radius: 0;
        `}
      >
        {children}
        <div
          css={`
            z-index: 1;
            position: absolute;
            top: -2px;
            right: -1px;
            width: ${BASE_WIDTH}px;
            height: 2px;
            border: 1px solid ${theme.border};
            border-width: 0 1px;
            background: ${theme.surface};
          `}
        />
      </Popover>
    </React.Fragment>
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

export default ContextMenu
