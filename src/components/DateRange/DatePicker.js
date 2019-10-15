import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import dayjs from 'dayjs'
import ButtonBase from '../ButtonBase/ButtonBase'
import Text from '../Text/Text'
import { GU } from '../../style'
import { useTheme } from '../../theme'
import { eachDayOfInterval } from '../../utils'

class DatePicker extends React.PureComponent {
  state = {
    value: this.props.initialDate || this.props.currentDate,
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
      value: dayjs(this.state.value)
        .startOf('month')
        .add(1, 'month')
        .toDate(),
    })
  }

  nextYear = event => {
    event.stopPropagation()

    this.setState({
      value: dayjs(this.state.value)
        .startOf('month')
        .add(1, 'year')
        .toDate(),
    })
  }

  previousMonth = event => {
    event.stopPropagation()

    this.setState({
      value: dayjs(this.state.value)
        .startOf('month')
        .subtract(1, 'month')
        .toDate(),
    })
  }

  previousYear = event => {
    event.stopPropagation()

    this.setState({
      value: dayjs(this.state.value)
        .startOf('month')
        .subtract(1, 'year')
        .toDate(),
    })
  }

  render() {
    const {
      currentDate,
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
    const { value: selected } = this.state
    const selectedDayjs = dayjs(selected)

    const isSelected = day => {
      if (datesRangeStart || datesRangeEnd) {
        return (
          day.isSame(datesRangeStart, 'day') || day.isSame(datesRangeEnd, 'day')
        )
      } else if (currentDate) {
        return day.isSame(currentDate, 'day')
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

        <MonthView>
          {!hideWeekDays &&
            eachDayOfInterval({
              start: selectedDayjs.startOf('week'),
              end: selectedDayjs.endOf('week'),
            })
              .map(day => dayjs(day))
              .map(day => (
                <WeekDay key={day.format('dd')}>
                  <Text size="xsmall">{day.format(weekDayFormat)}</Text>
                </WeekDay>
              ))}

          {eachDayOfInterval({
            start: selectedDayjs.startOf('month').startOf('week'),
            end: selectedDayjs.endOf('month').endOf('week'),
          })
            .map(day => dayjs(day))
            .map(day => (
              <DayView
                key={day.valueOf()}
                disabled={!selectedDayjs.isSame(day, 'month')}
                selected={isSelected(day)}
                inRange={isInRange(day)}
                rangeBoundaryBegin={
                  datesRangeStart &&
                  datesRangeEnd &&
                  day.isSame(datesRangeStart, 'day')
                }
                rangeBoundaryEnd={
                  datesRangeStart &&
                  datesRangeEnd &&
                  day.isSame(datesRangeEnd, 'day')
                }
                today={day.isSame(today, 'day')}
                onClick={this.handleSelection(day.toDate())}
              >
                <Text size="small">{day.format(dayFormat)}</Text>
              </DayView>
            ))}
        </MonthView>
      </Container>
    )
  }
}

DatePicker.propTypes = {
  /**
   * For displaying a single selected date on the calendar
   */
  currentDate: PropTypes.instanceOf(Date),
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
   * If not set, currentDate will be used.
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

/* eslint-disable react/prop-types */
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
/* eslint-enable react/prop-types */

const Selector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

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

const MonthView = styled.ol`
  margin: 0;
  padding: 0.5em;
  display: grid;
  grid-template: auto / repeat(7, 1fr);
  list-style: none;
`

const TodayIndicator = styled.span`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  ${({ theme, selected }) => css`
    background: ${selected ? theme.selected : theme.surface};
    border: 2px solid ${theme.accent};
  `}
`

/* eslint-disable react/prop-types */
const DayView = function({
  children,
  disabled,
  selected,
  inRange,
  rangeBoundaryBegin,
  rangeBoundaryEnd,
  today,
  ...props
}) {
  const theme = useTheme()
  const dimmedSelectedColor = theme.selected.alpha(0.09)

  return (
    <li
      css={`
        position: relative;
        width: 2.571em;
        height: 2.571em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        font-size: 90%;
        user-select: none;

        padding: 0.20em 0.25em;
        margin-top: 0.05em;
        margin-bottom: 0.05em;

        ${disabled &&
          css`
            pointer-events: none;
            color: ${theme.disabled};
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
/* eslint-enable react/prop-types */

const WeekDay = function(props) {
  const theme = useTheme()
  return (
    <DayView
      css={`
        pointer-events: none;
        color: ${theme.disabled};
        text-transform: uppercase;
      `}
      {...props}
    />
  )
}

export default DatePicker
