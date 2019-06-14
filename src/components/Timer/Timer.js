import React from 'react'
import PropTypes from 'prop-types'
import memoize from 'lodash-es/memoize'
import dayjs from 'dayjs'
import { Redraw } from '../../providers/Redraw'
import { IconTime } from '../../icons'
import { difference, formatHtmlDatetime } from '../../utils/date'
import { unselectable } from '../../utils/styles'
import { theme } from '../../theme-legacy'

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

const unitNames = {
  y: 'years',
  M: 'months',
  d: 'days',
  h: 'hours',
  m: 'minutes',
  s: 'seconds',
}

const getFormat = memoize(format =>
  ['y', 'M', 'd', 'h', 'm', 's'].reduce(
    (units, symbol) =>
      formats[format].includes(symbol) ? [...units, unitNames[symbol]] : units,
    []
  )
)

function getTime(start, end, format, showEmpty, maxUnits) {
  const date1 = end || new Date()
  const date2 = end ? new Date() : start

  const totalInSeconds = dayjs(date1).diff(date2, 'seconds')

  const { years, months, days, hours, minutes, seconds } = difference(
    date1,
    date2,
    { keepLeadingZeros: showEmpty, maxUnits, units: getFormat(format) }
  )

  return {
    units: [
      ['Y', years],
      ['M', months],
      ['D', days],
      ['H', hours],
      ['M', minutes],
      ['S', seconds],
    ],
    totalInSeconds,
  }
}

class Timer extends React.Component {
  static propTypes = {
    end: PropTypes.instanceOf(Date),
    format: PropTypes.oneOf(Object.keys(formats)),
    maxUnits: PropTypes.number,
    showEmpty: PropTypes.bool,
    start: PropTypes.instanceOf(Date),
  }
  static defaultProps = {
    format: formats.yMdhms,
    maxUnits: -1,
    showEmpty: false,
  }

  render() {
    const { end, start } = this.props
    return (
      <time
        dateTime={formatHtmlDatetime(end || start)}
        css={`
          display: flex;
          align-items: center;
          white-space: nowrap;
          ${unselectable()};
        `}
      >
        <span
          css={`
            display: flex;
            align-items: center;
            margin-right: 15px;
            margin-top: -3px;
            color: ${theme.textSecondary};
          `}
        >
          <IconTime />
        </span>
        <Redraw interval={RENDER_EVERY}>{this.renderTime}</Redraw>
      </time>
    )
  }

  renderTime = () => {
    const { start, end, format, showEmpty, maxUnits } = this.props

    const { totalInSeconds, units } = getTime(
      start,
      end,
      format,
      showEmpty,
      maxUnits
    )

    if (totalInSeconds < 0 || Object.is(totalInSeconds, -0)) {
      return (
        <span
          css={`
            font-weight: 600;
            color: ${theme.textSecondary};
          `}
        >
          {end ? 'Time out' : '−'}
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
