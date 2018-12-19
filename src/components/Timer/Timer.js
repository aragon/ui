import React from 'react'
import styled from 'styled-components'
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
  dhms: 'dhms',
  dhm: 'dhm',
  hms: 'hms',
  hm: 'hm',
  ms: 'ms',
  m: 'm',
  s: 's',
}

const getFormat = memoize(format =>
  ['d', 'h', 'm', 's'].map(symbol => formats[format].includes(symbol))
)

const getTime = (start, end, format, showEmpty) => {
  const [showDays, showHours, showMinutes, showSeconds] = getFormat(format)
  let { days, hours, minutes, seconds, totalInSeconds } = difference(
    ...(end ? [end, new Date()] : [new Date(), start])
  )

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

  return { days, hours, minutes, seconds, totalInSeconds }
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
      <Main dateTime={formatHtmlDatetime(end || start)}>
        <IconWrapper>
          <IconTime />
        </IconWrapper>
        <Redraw interval={FRAME_EVERY}>{this.renderTime}</Redraw>
      </Main>
    )
  }

  renderTime = () => {
    const { start, end, format, showEmpty } = this.props

    const { days, hours, minutes, seconds, totalInSeconds } = getTime(
      start,
      end,
      format,
      showEmpty
    )

    if (end && totalInSeconds <= 0) {
      return <TimeOut>Time out</TimeOut>
    }

    return (
      <span>
        {days !== null && (
          <React.Fragment>
            <Part>
              {formatUnit(days)}
              <Unit>D</Unit>
            </Part>
            <Separator />
          </React.Fragment>
        )}
        {hours !== null && (
          <Part>
            {formatUnit(hours)}
            <Unit>H</Unit>
          </Part>
        )}
        {hours !== null && minutes !== null && <Separator>:</Separator>}
        {minutes !== null && (
          <Part>
            {formatUnit(minutes)}
            <Unit>M</Unit>
          </Part>
        )}
        {seconds !== null && (
          <React.Fragment>
            {minutes !== null && <Separator>:</Separator>}
            <PartSeconds>
              {formatUnit(seconds)}
              <UnitSeconds>S</UnitSeconds>
            </PartSeconds>
          </React.Fragment>
        )}
      </span>
    )
  }
}

const Main = styled.time`
  white-space: nowrap;
  ${unselectable()};
`

const IconWrapper = styled.span`
  margin-right: 15px;
`

const Part = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${theme.textPrimary};
`

const PartSeconds = styled(Part)`
  display: inline-flex;
  align-items: baseline;
  justify-content: space-between;
  min-width: 31px;
`

const Unit = styled.span`
  margin-left: 2px;
  font-size: 12px;
  color: ${theme.textSecondary};
`

const UnitSeconds = styled(Unit)`
  position: relative;
  left: -3px;
`

const Separator = styled.span`
  margin: 0 4px;
  color: ${theme.textTertiary};
  font-weight: 400;
`

const TimeOut = styled.span`
  font-weight: 600;
  color: ${theme.textSecondary};
`

export default Timer
