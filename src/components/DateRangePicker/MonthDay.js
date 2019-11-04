import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import { useTheme } from '../../theme'
import { textStyle, GU } from '../../style'
import ButtonBase from '../ButtonBase/ButtonBase'
import { HoverIndicator } from './components'

function MonthDay({
  children,
  disabled,
  inRange,
  rangeBoundaryBegin,
  rangeBoundaryEnd,
  selected,
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
        width: ${4.5 * GU}px;
        height: ${weekDay ? 3.5 * GU : 4.5 * GU}px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        font-size: 90%;
        user-select: none;
        margin-bottom: 1px;

        ${
          disabled
            ? `
                pointer-events: none;
                opacity: 0;
              `
            : ''
        };

        ${
          selected && !disabled
            ? `
                &&& {
                  background: ${theme.selected};
                  color: ${theme.positiveContent};
                }
              `
            : ''
        }

        ${
          inRange && !selected && !disabled
            ? `
                background: ${dimmedSelectedColor};
                border-radius: 0;
              `
            : ''
        }

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
            font-weight: 600;
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
      <span
        css={`
          ${textStyle(weekDay ? 'body4' : 'body3')};
        `}
      >
        {children}
      </span>
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
  children: PropTypes.node,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  inRange: PropTypes.bool,
  rangeBoundaryBegin: PropTypes.bool,
  rangeBoundaryEnd: PropTypes.bool,
  today: PropTypes.bool,
  weekDay: PropTypes.bool,
}

function WrappedMonthDay({ onClick, ...props }) {
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
