import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { GU, RADIUS } from '../../utils'
import { useTheme } from '../../theme'
import { useInsideCardsLayout } from '../CardsLayout/CardsLayout'
import FocusVisible from '../FocusVisible/FocusVisible'

const DEFAULT_WIDTH = 35 * GU
const DEFAULT_HEIGHT = 40 * GU

function dimension(insideCardsLayout, value, defaultValue) {
  if (insideCardsLayout) {
    return '100%'
  }
  if (typeof value === 'number') {
    value = `${value}px`
  }
  return value === undefined ? defaultValue : value
}

function Card({ children, width, height, onClick, ...props }) {
  const theme = useTheme()
  const insideCardsLayout = useInsideCardsLayout()
  const interactive = Boolean(onClick)

  const interactiveProps = interactive ? { role: 'button', tabIndex: '0' } : {}

  return (
    <FocusVisible>
      {({ focusVisible, onFocus }) => (
        <div
          {...interactiveProps}
          onFocus={onFocus}
          css={`
            position: relative;
            width: ${dimension(insideCardsLayout, width, `${DEFAULT_WIDTH}px`)};
            height: ${dimension(
              insideCardsLayout,
              height,
              `${DEFAULT_HEIGHT}px`
            )};
            background: ${theme.surface};
            border: 1px solid ${theme.border};
            border-radius: ${RADIUS}px;
            cursor: ${interactive ? 'pointer' : 'default'};

            ${interactive &&
              css`
                border: 0;
                box-shadow: 0px 1px 3px rgba(51, 77, 117, 0.15);
                transition-property: transform, box-shadow;
                transition-duration: 50ms;
                transition-timing-function: ease-in-out;

                &:active {
                  transform: translateY(1px);
                  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.075);
                }

                &:focus {
                  outline: 0;
                  .focus-ring {
                    display: block !important;
                  }
                }
              `}
          `}
          {...props}
        >
          {children}
          {focusVisible && <FocusRing />}
        </div>
      )}
    </FocusVisible>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
}

function FocusRing() {
  const theme = useTheme()
  return (
    <span
      className="focus-ring"
      css={`
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid ${theme.focus};
        border-radius: ${RADIUS}px;
      `}
    />
  )
}

export default Card
