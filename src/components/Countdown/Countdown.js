import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import IconTime from '../../icons/components/Time'
import { difference, formatHtmlDatetime } from '../../utils/date'
import { unselectable } from '../../utils/styles'
import theme from '../../theme'

const FRAME_EVERY = 1000 / 30 // 30 FPS is enough for a ticker

const formatUnit = v => String(v).padStart(2, '0')

class Countdown extends React.Component {
  componentDidMount() {
    this.raf = null
    this.lastDraw = Date.now()
    this.draw()
  }
  componentWillUnmount() {
    this.raf && cancelAnimationFrame(this.raf)
  }
  draw = () => {
    this.raf = requestAnimationFrame(this.draw)

    const now = Date.now()
    const delta = now - this.lastDraw
    if (delta > FRAME_EVERY) {
      this.forceUpdate()
      this.lastDraw = now - delta % FRAME_EVERY
    }
  }
  render() {
    const { end } = this.props
    const { days, hours, minutes, seconds, totalInSeconds } = difference(
      end,
      new Date()
    )

    return (
      <Main dateTime={formatHtmlDatetime(end)}>
        <IconWrapper>
          <IconTime />
        </IconWrapper>
        {totalInSeconds > 0 ? (
          <span>
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
            <Part>
              {formatUnit(minutes)}
              <Unit>M</Unit>
            </Part>
            <Separator>:</Separator>
            <Part>
              {formatUnit(seconds)}
              <Unit>S</Unit>
            </Part>
          </span>
        ) : (
          <TimeOut>Time out</TimeOut>
        )}
      </Main>
    )
  }
}

Countdown.propTypes = {
  end: PropTypes.instanceOf(Date),
}

const Main = styled.time`
  width: 12em;
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
