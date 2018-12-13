import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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
  ms: 'ms'
}

const getFormat = function (format) {
  const timeFormat = ['d', 'h', 'm', 's']
  const checkFormat = symbol => formats[format].includes(symbol)
  return timeFormat.map(checkFormat)
}

class Timer extends React.Component {
  static propTypes = {
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    format: PropTypes.oneOf(Object.keys(formats))
  }

  static defaultProps = {
    format: formats.dhms
  }

  constructor(props) {
    super(props)
    const [showDays, showHours, showMinutes, showSeconds] = getFormat(props.format)
    this.state = { showDays, showHours, showMinutes, showSeconds }
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
    const { start, end } = this.props
    const { showDays, showHours, showMinutes, showSeconds } = this.state
    const diffArgs = end ? [end, new Date()] : [new Date(), start]
    const { days, hours, minutes, seconds, totalInSeconds } = difference(
      ...diffArgs
    )

    if (end && totalInSeconds <= 0) {
      return <TimeOut>Time out</TimeOut>
    }

    return (
      <span>
        {showDays && (
          <React.Fragment>
            <Part>
              {formatUnit(days)}
              <Unit>D</Unit>
            </Part>
            <Separator />
          </React.Fragment>
        )}
        {showHours && (
          <Part>
            {formatUnit(hours)}
            <Unit>H</Unit>
          </Part>
        )}
        {showHours && showMinutes && (
          <Separator>:</Separator>
        )}
        {showMinutes && (
          <Part>
            {formatUnit(minutes)}
            <Unit>M</Unit>
          </Part>
        )}
        {showSeconds && (
          <React.Fragment>
            <Separator>:</Separator>
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
