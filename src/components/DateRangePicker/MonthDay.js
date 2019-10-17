import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import { useTheme } from '../../theme'
import { HoverIndicator } from './components'
import ButtonBase from '../ButtonBase/ButtonBase'
import { font } from '../../utils/font'

const MonthDay = function({
  children,
  disabled,
  selected,
  inRange,
  rangeBoundaryBegin,
  rangeBoundaryEnd,
  today,
  weekDay,
  ...props
}) {
  const theme = useTheme()
  const dimmedSelectedColor = theme.selected.alpha(0.09)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      css={`
        position: relative;
        width: 36px;
        height: ${weekDay ? 28 : 36}px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        font-size: 90%;
        user-select: none;
        margin-bottom: 1px;

        ${disabled &&
          css`
            pointer-events: none;
            opacity: 0;
          `}

        ${selected &&
          !disabled &&
          css`
            &&& {
              background: ${theme.selected};
              color: ${theme.positiveContent};
            }
          `}

        ${inRange &&
          !selected &&
          !disabled &&
          css`
            background: ${dimmedSelectedColor};
            border-radius: 0;
          `}

        ${(rangeBoundaryBegin || rangeBoundaryEnd) &&
          css`
            z-index: 1;
            &:before {
              content: '';
              position: absolute;
              top: 0;
              ${rangeBoundaryBegin ? 'right' : 'left'}: 0;
              z-index: 0;
              background: ${dimmedSelectedColor};
              width: 50%;
              height: 100%;
            }
          `}

        ${isHovered &&
          css`
            > * {
              z-index: 1;
            }
          `}

        ${today &&
          css`
            color: ${theme.selected};
            ${font({ weight: 'bold' })};
          `}

        ${weekDay &&
          css`
            pointer-events: none;
            color: ${theme.contentSecondary};
            text-transform: uppercase;
          `}

        &:after {
          display: block;
          content: '';
          margin-top: 100%;
        }
      `}
      {...props}
    >
      {isHovered ? <HoverIndicator theme={theme} selected={selected} /> : null}
      {children}
      {today ? (
        <div
          css={`
            position: absolute;
            bottom: 1px;
            font-size: 9px;
            color: ${selected ? theme.surface : theme.selected};
          `}
        >
          ●
        </div>
      ) : null}
    </div>
  )
}

MonthDay.propTypes = {
  children: PropTypes.element,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  inRange: PropTypes.bool,
  rangeBoundaryBegin: PropTypes.bool,
  rangeBoundaryEnd: PropTypes.bool,
  today: PropTypes.bool,
  weekDay: PropTypes.bool,
}

const WrappedMonthDay = ({ onClick, ...props }) => {
  if (onClick && !props.disabled) {
    return (
      <ButtonBase
        css={`
          margin: 0;
        `}
        onClick={onClick}
      >
        <MonthDay {...props}></MonthDay>
      </ButtonBase>
    )
  } else {
    return <MonthDay {...props}></MonthDay>
  }
}

export default WrappedMonthDay
