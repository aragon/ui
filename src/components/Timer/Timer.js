import React from 'react'
import PropTypes from 'prop-types'
import memoize from 'lodash-es/memoize'
import { Redraw } from '../../providers/Redraw'
import IconTime from '../../icons/components/Time'
import { difference, formatHtmlDatetime } from '../../utils/date'
import { unselectable } from '../../utils/styles'
import { theme } from '../../theme'

const FRAME_EVERY = 1000 / 30 // 30 FPS is enough for a ticker

const formatUnit = v => String(v).padStart(2, '0')

const formats = {
  yMdhms: 'yMdhms',
  yMdhm: 'yMdhm',
  yMdh: 'yMdh',
  yMd: 'yMd',
  yM: 'yM',
  Mdhms: 'Mdhms',
  Mdhm: 'Mdhm',
  Mdh: 'Mdh',
  Md: 'Md',
  dhms: 'dhms',
  dhm: 'dhm',
  hms: 'hms',
  hm: 'hm',
  ms: 'ms',
  m: 'm',
  s: 's',
}

const getFormat = memoize(format =>
  ['y', 'M', 'd', 'h', 'm', 's'].map(symbol => formats[format].includes(symbol))
)

const getUnits = (years, months, days, hours, minutes, seconds) => [
  ['Y', years],
  ['M', months],
  ['D', days],
  ['H', hours],
  ['M', minutes],
  ['S', seconds],
]

const getTime = (start, end, format, showEmpty) => {
  const [
    showYears,
    showMonths,
    showDays,
    showHours,
    showMinutes,
    showSeconds,
  ] = getFormat(format)
  let {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    totalInSeconds,
  } = difference(...(end ? [end, new Date()] : [new Date(), start]))

  if (!showYears) {
    months += years * 12
    years = null
  } else if (years === 0 && !showEmpty) {
    years = null
  }

  if (!showMonths) {
    days += months * 30
    months = null
  } else if (months === 0 && !showEmpty) {
    months = null
  }

  if (!showDays) {
    hours += days * 24
    days = null
  } else if (days === 0 && !showEmpty) {
    days = null
  }

  if (!showHours) {
    minutes += hours * 60
    hours = null
  } else if (hours === 0 && days === null && !showEmpty) {
    hours = null
  }

  if (!showMinutes) {
    seconds += minutes * 60
    minutes = null
  } else if (minutes === 0 && hours === null && days === null && !showEmpty) {
    minutes = null
  }

  if (!showSeconds) {
    seconds = null
  }

  return {
    units: getUnits(years, months, days, hours, minutes, seconds),
    totalInSeconds,
  }
}

class Timer extends React.Component {
  static propTypes = {
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    format: PropTypes.oneOf(Object.keys(formats)),
    showEmpty: PropTypes.bool,
  }

  static defaultProps = {
    format: formats.dhms,
    showEmpty: false,
  }

  render() {
    const { end, start } = this.props
    return (
      <time
        dateTime={formatHtmlDatetime(end || start)}
        css={`
          white-space: nowrap;
          ${unselectable()};
        `}
      >
        <span css="margin-right: 15px">
          <IconTime />
        </span>
        <Redraw interval={FRAME_EVERY}>{this.renderTime}</Redraw>
      </time>
    )
  }

  renderTime = () => {
    const { start, end, format, showEmpty } = this.props

    const { totalInSeconds, units } = getTime(start, end, format, showEmpty)

    if (end && totalInSeconds <= 0) {
      return (
        <span
          css={`
            font-weight: 600;
            color: ${theme.textSecondary};
          `}
        >
          Time out
        </span>
      )
    }

    const lastUnitIndex = units.reduce(
      (lastIndex, unit, index) => (unit[1] === null ? lastIndex : index),
      0
    )

    return (
      <span>
        {units.map((unit, index) => {
          const isLast = index === lastUnitIndex
          const isSeconds = index === units.length - 1

          // Only time units (hours, minutes and seconds).
          // Remember to update if ms gets added one day!
          const isTimeUnit = index >= units.length - 3

          if (unit[1] === null) {
            return null
          }

          return (
            <React.Fragment key={index}>
              <span
                css={`
                  font-size: 15px;
                  font-weight: 600;
                  color: ${theme.textPrimary};

                  ${isSeconds &&
                    // Fix the width of the seconds unit so that
                    // it doesn’t jump too much.
                    `
                      display: inline-flex;
                      align-items: baseline;
                      justify-content: space-between;
                      min-width: 31px;
                    `};
                `}
              >
                {formatUnit(unit[1])}
                <span
                  css={`
                    margin-left: 2px;
                    font-size: 12px;
                    color: ${theme.textSecondary};
                  `}
                >
                  {unit[0]}
                </span>
              </span>
              {!isLast && (
                // Separator
                <span
                  css={`
                    margin: 0 4px;
                    color: ${theme.textTertiary};
                    font-weight: 400;
                  `}
                >
                  {isTimeUnit && ':'}
                </span>
              )}
            </React.Fragment>
          )
        })}
      </span>
    )
  }
}

export default Timer
