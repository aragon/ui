import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'
import dayjs from 'dayjs'

import ButtonBase from '../ButtonBase/ButtonBase'
import Text from '../Text/Text'
import { GU } from '../../style'
import { useTheme } from '../../theme'
import { eachDayOfInterval } from '../../utils'
import { Selector, MonthWrapper } from './components'
import MonthDay from './MonthDay'

class DatePicker extends React.PureComponent {
  state = {
    selectedDate: this.props.initialDate,
  }

  handleSelection = date => event => {
    event.stopPropagation()
    event.preventDefault()

    if (typeof this.props.onSelect === 'function') {
      this.props.onSelect(date)
    }
  }

  nextMonth = event => {
    event.stopPropagation()

    this.setState({
      selectedDate: dayjs(this.state.selectedDate)
        .startOf('month')
        .add(1, 'month')
        .toDate(),
    })
  }

  nextYear = event => {
    event.stopPropagation()

    this.setState({
      selectedDate: dayjs(this.state.selectedDate)
        .startOf('month')
        .add(1, 'year')
        .toDate(),
    })
  }

  previousMonth = event => {
    event.stopPropagation()

    this.setState({
      selectedDate: dayjs(this.state.selectedDate)
        .startOf('month')
        .subtract(1, 'month')
        .toDate(),
    })
  }

  previousYear = event => {
    event.stopPropagation()

    this.setState({
      selectedDate: dayjs(this.state.selectedDate)
        .startOf('month')
        .subtract(1, 'year')
        .toDate(),
    })
  }

  render() {
    const {
      datesRangeStart,
      datesRangeEnd,
      hideMonthSelector,
      hideWeekDays,
      hideYearSelector,
      name,
      dayFormat,
      monthFormat,
      monthYearFormat,
      weekDayFormat,
      yearFormat,
    } = this.props
    const today = dayjs()
      .startOf('day')
      .toDate()
    const { selectedDate } = this.state
    const selectedDayjs = dayjs(selectedDate || today)

    const isSelected = day => {
      if (datesRangeStart || datesRangeEnd) {
        return (
          day.isSame(datesRangeStart, 'day') || day.isSame(datesRangeEnd, 'day')
        )
      }
      return false
    }

    const isInRange = day => {
      if (datesRangeStart && datesRangeEnd) {
        return day.isAfter(datesRangeStart) && day.isBefore(datesRangeEnd)
      }
    }

    return (
      <Container overlay={this.props.overlay}>
        {name && (
          <Text
            size="normal"
            weight="bold"
            css={`
              text-align: center;
              margin-bottom: 2px;
            `}
          >
            {name}
          </Text>
        )}

        {!hideYearSelector && (
          <Selector>
            <ArrowButton onClick={this.previousYear}>◀</ArrowButton>
            <Text size="normal">{selectedDayjs.format(yearFormat)}</Text>
            <ArrowButton onClick={this.nextYear}>▶</ArrowButton>
          </Selector>
        )}

        {!hideMonthSelector && (
          <Selector>
            <ArrowButton onClick={this.previousMonth}>◀</ArrowButton>
            <Text size="large" weight="bold">
              {selectedDayjs.format(
                !hideYearSelector ? monthFormat : monthYearFormat
              )}
            </Text>
            <ArrowButton onClick={this.nextMonth}>▶</ArrowButton>
          </Selector>
        )}

        <MonthWrapper>
          {!hideWeekDays &&
            eachDayOfInterval({
              start: selectedDayjs.startOf('week'),
              end: selectedDayjs.endOf('week'),
            }).map(day => {
              const dayJs = dayjs(day)
              return (
                <MonthDay key={dayJs.format('dd')} weekDay>
                  <Text size="xsmall">{dayJs.format(weekDayFormat)}</Text>
                </MonthDay>
              )
            })}

          {eachDayOfInterval({
            start: selectedDayjs.startOf('month').startOf('week'),
            end: selectedDayjs.endOf('month').endOf('week'),
          }).map(day => {
            const dayJs = dayjs(day)
            return (
              <MonthDay
                key={dayJs.valueOf()}
                disabled={!selectedDayjs.isSame(dayJs, 'month')}
                selected={isSelected(dayJs)}
                inRange={isInRange(dayJs)}
                rangeBoundaryBegin={
                  datesRangeStart &&
                  datesRangeEnd &&
                  dayJs.isSame(datesRangeStart, 'day')
                }
                rangeBoundaryEnd={
                  datesRangeStart &&
                  datesRangeEnd &&
                  dayJs.isSame(datesRangeEnd, 'day')
                }
                today={dayJs.isSame(today, 'day')}
                onClick={this.handleSelection(dayJs.toDate())}
              >
                <Text size="small">{dayJs.format(dayFormat)}</Text>
              </MonthDay>
            )
          })}
        </MonthWrapper>
      </Container>
    )
  }
}

DatePicker.propTypes = {
  /**
   * For displaying a selected dates range - start
   */
  datesRangeStart: PropTypes.instanceOf(Date),
  /**
   * For displaying a selected dates range - end
   */
  datesRangeEnd: PropTypes.instanceOf(Date),
  /**
   * Initial date - calendar will start from here.
   */
  initialDate: PropTypes.instanceOf(Date),
  name: PropTypes.string,

  // Events
  onSelect: PropTypes.func,

  // Visibility
  hideMonthSelector: PropTypes.bool,
  hideWeekDays: PropTypes.bool,
  hideYearSelector: PropTypes.bool,
  overlay: PropTypes.bool,

  // Formatting
  dayFormat: PropTypes.string,
  monthFormat: PropTypes.string,
  monthYearFormat: PropTypes.string,
  weekDayFormat: PropTypes.string,
  yearFormat: PropTypes.string,
}

DatePicker.defaultProps = {
  onSelect: () => {},
  dayFormat: 'D',
  monthFormat: 'MMMM',
  monthYearFormat: 'MMMM YYYY',
  weekDayFormat: 'ddd',
  yearFormat: 'YYYY',
}

const Container = ({ overlay, ...props }) => {
  const theme = useTheme()
  return (
    <div
      css={`
        display: grid;
        min-width: 15em;
        margin: 0 auto;
        padding-top: 0.5em;
        background: ${theme.surface};
        border: 1px solid ${theme.border};
        border-radius: 3px;
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.06);

        ${overlay &&
          css`
            &&& {
              position: absolute;
              right: 0;
              z-index: 10;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
            }
          `}
      `}
      {...props}
    />
  )
}

Container.propTypes = {
  overlay: PropTypes.bool,
}

const ArrowButton = props => {
  const theme = useTheme()
  return (
    <ButtonBase
      css={`
        padding: ${1 * GU}px ${3 * GU}px;
        font-size: 9px;
        color: ${theme.border};

        &:hover {
          color: inherit;
        }
      `}
      {...props}
    />
  )
}

export default DatePicker
