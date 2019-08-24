import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { GU, RADIUS } from '../../style'
import { useTheme } from '../../theme'
import { unselectable, useInside } from '../../utils'
import { ButtonBase } from '../Button/ButtonBase'

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
    ? { as: ButtonBase, focusRingRadius: RADIUS, onClick }
    : {}

  return (
    <div
      {...interactiveProps}
      css={`
        position: relative;
        width: ${dimension(insideCardLayout, width, `${DEFAULT_WIDTH}px`)};
        height: ${dimension(insideCardLayout, height, `${DEFAULT_HEIGHT}px`)};
        background: ${theme.surface};
        border: 1px solid ${theme.border};
        border-radius: ${RADIUS}px;
        cursor: ${interactive ? 'pointer' : 'default'};
        display: flex;
        align-items: center;
        justify-content: center;

        ${interactive &&
          css`
            border: 0;
            box-shadow: 0px 1px 3px rgba(51, 77, 117, 0.15);
            transition-property: top, box-shadow;
            transition-duration: 50ms;
            transition-timing-function: ease-in-out;
            ${unselectable};

            &:active {
              top: 1px;
              box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.075);
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
