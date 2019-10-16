import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import { useTheme } from '../../theme'
import { TodayIndicator } from './components'
import ButtonBase from '../ButtonBase/ButtonBase'

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

  return (
    <li
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

        padding: 0 19px;
        margin-top: 0.05em;
        margin-bottom: 0.05em;

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

        ${today &&
          css`
            > * {
              z-index: 1;
            }
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

        &:hover {
          background: ${theme.surfaceHighlight};
        }
      `}
      {...props}
    >
      {today ? <TodayIndicator theme={theme} selected={selected} /> : null}
      {children}
    </li>
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
      <ButtonBase onClick={onClick}>
        <MonthDay {...props}></MonthDay>
      </ButtonBase>
    )
  } else {
    return <MonthDay {...props}></MonthDay>
  }
}

export default WrappedMonthDay
