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

class Countdown extends React.Component {
  static propTypes = {
    end: PropTypes.instanceOf(Date),
    removeDaysAndHours: PropTypes.bool,
  }
  render() {
    const { end } = this.props
    return (
      <Main dateTime={formatHtmlDatetime(end)}>
        <IconWrapper>
          <IconTime />
        </IconWrapper>
        <Redraw interval={FRAME_EVERY}>{this.renderTime}</Redraw>
      </Main>
    )
  }
  renderTime = () => {
    const { end, removeDaysAndHours } = this.props
    const { days, hours, minutes, seconds, totalInSeconds } = difference(
      end,
      new Date()
    )
    if (totalInSeconds <= 0) {
      return <TimeOut>Time out</TimeOut>
    }
    return (
      <span>
        {!removeDaysAndHours && (
          <React.Fragment>
            <Part>
              {formatUnit(days)}
              <Unit>D</Unit>
            </Part>
            <Separator />
            <Part>
              {formatUnit(hours)}
              <Unit>H</Unit>
            </Part>
            <Separator>:</Separator>
          </React.Fragment>
        )}
        <Part>
          {formatUnit(minutes)}
          <Unit>M</Unit>
        </Part>
        <Separator>:</Separator>
        <PartSeconds>
          {formatUnit(seconds)}
          <UnitSeconds>S</UnitSeconds>
        </PartSeconds>
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

const UnitSeconds = styled(Unit)`
  position: relative;
  left: -3px;
`

const Separator = styled.span`
  margin: 0 4px;
  color: ${theme.textTertiary};
  font-weight: 400;
`

const Unit = styled.span`
  margin-left: 2px;
  font-size: 12px;
  color: ${theme.textSecondary};
`

const TimeOut = styled.span`
  font-weight: 600;
  color: ${theme.textSecondary};
`

export default Countdown
