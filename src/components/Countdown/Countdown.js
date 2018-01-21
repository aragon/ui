import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import IconTime from '../../icons/components/Time'
import { difference } from '../../date-utils'
import { unselectable } from '../../shared-styles'
import theme from '../../theme'

const formatUnit = v => String(v).padStart(2, '0')

class Countdown extends React.Component {
  componentDidMount() {
    this.startTimer()
  }
  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
  startTimer = () => {
    this.timeout = setTimeout(() => {
      requestAnimationFrame(() => {
        this.forceUpdate()
        this.startTimer()
      })
    }, 1000)
  }
  render() {
    const { end } = this.props
    const { days, hours, minutes, seconds, totalInSeconds } = difference(
      end,
      new Date()
    )

    return (
      <Main dateTime="">
        <IconWrapper>
          <IconTime />
        </IconWrapper>
        {totalInSeconds > 0 ? (
          <span>
            <Part>
              {formatUnit(days)}
              <Unit>D</Unit>
            </Part>
            <Part>
              {formatUnit(hours)}
              <Unit>H</Unit>
            </Part>
            <Part>
              {formatUnit(minutes)}
              <Unit>M</Unit>
            </Part>
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
  & + & {
    margin-left: 7px;
  }
  &:nth-child(n + 2) + & {
    margin-left: 0;
    &:before {
      content: ':';
      margin: 0 4px;
      color: ${theme.textTertiary};
      font-weight: 400;
    }
  }
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
