import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { GU, RADIUS } from '../../style'
import { useTheme } from '../../theme'
import { useInside } from '../../utils'
import ButtonBase from '../ButtonBase/ButtonBase'

const DEFAULT_WIDTH = 35 * GU
const DEFAULT_HEIGHT = 40 * GU

function dimension(insideCardLayout, value, defaultValue) {
  if (insideCardLayout) {
    return '100%'
  }
  if (typeof value === 'number') {
    value = `${value}px`
  }
  return value === undefined ? defaultValue : value
}

function Card({ children, width, height, onClick, ...props }) {
  const theme = useTheme()
  const [insideCardLayout] = useInside('CardLayout')
  const interactive = Boolean(onClick)

  const interactiveProps = interactive
    ? { as: ButtonBase, element: 'div', focusRingRadius: RADIUS, onClick }
    : {}

  const cssWidth = dimension(insideCardLayout, width, `${DEFAULT_WIDTH}px`)
  const cssHeight = dimension(insideCardLayout, height, `${DEFAULT_HEIGHT}px`)

  return (
    <div
      {...interactiveProps}
      css={`
        position: relative;
        width: ${cssWidth};
        height: ${cssHeight};
        background: ${theme.surface};
        border: 1px solid ${theme.border};
        border-radius: ${RADIUS}px;
        cursor: ${interactive ? 'pointer' : 'default'};

        // Default layout
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        ${interactive &&
          css`
            border: 0;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);
            transition-property: transform, box-shadow;
            transition-duration: 50ms;
            transition-timing-function: ease-in-out;

            // Reset some styles applied by ButtonBase
            text-align: left;
            white-space: normal;

            &:active {
              transform: translateY(1px);
              box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08);
            }
          `}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
}

export default Card
