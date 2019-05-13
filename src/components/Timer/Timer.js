import React from 'react'
import PropTypes from 'prop-types'
import memoize from 'lodash-es/memoize'
import { differenceInSeconds } from 'date-fns'
import { Redraw } from '../../providers/Redraw'
import IconTime from '../../icons/components/Time'
import { difference, formatHtmlDatetime } from '../../utils/date'
import { unselectable } from '../../utils/styles'
import { theme } from '../../theme'

const RENDER_EVERY = 1000

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

// Remove “0” units on the left side
function removeLeftZeros(units) {
  // keep at least one unit, even if its value is 0
  const lastZeroIndex = units.map(u => u[1]).lastIndexOf(0)
  for (let i = 0; i < units.length && i < lastZeroIndex; i++) {
    if (units[i][1] !== 0 && units[i][1] !== null) {
      return units
    }
    units[i][1] = null
  }
  return units
}

const getTime = (start, end, format, showEmpty) => {
  const [
    showYears,
    showMonths,
    showDays,
    showHours,
    showMinutes,
    showSeconds,
  ] = getFormat(format)

  const period = end ? [end, new Date()] : [new Date(), start]

  const totalInSeconds = differenceInSeconds(...period)

  const { years, months, days, hours, minutes, seconds } = difference(
    ...period,
    {
      years: showYears,
      months: showMonths,
      days: showDays,
      hours: showHours,
      minutes: showMinutes,
      seconds: showSeconds,
    }
  )

  const units = [
    ['Y', years],
    ['M', months],
    ['D', days],
    ['H', hours],
    ['M', minutes],
    ['S', seconds],
  ]

  return {
    units: showEmpty ? units : removeLeftZeros(units),
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
    format: formats.yMdhms,
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
        <Redraw interval={RENDER_EVERY}>{this.renderTime}</Redraw>
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
