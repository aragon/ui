import React, { useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import Text from '../Text/Text'
import { eachDayOfInterval } from '../../utils'
import { Selector } from './components'
import MonthDay from './MonthDay'

const DatePicker = ({
  initialDate,
  onSelect,
  datesRangeStart,
  datesRangeEnd,
  hideYearSelector,
  name,
  yearFormat,
  hideMonthSelector,
  monthFormat,
  monthYearFormat,
  hideWeekDays,
  weekDayFormat,
  ...props
}) => {
  const [selectedDate, setSelectedDate] = useState(initialDate)

  const setDate = ({ year, add }) => event => {
    setSelectedDate(
      dayjs(selectedDate)
        .startOf('month')
        [add ? 'add' : 'subtract'](1, year ? 'year' : 'month')
        .toDate()
    )
  }

  const today = dayjs()
    .startOf('day')
    .toDate()
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
    <div
      css={`
        display: grid;
      `}
      {...props}
    >
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
        <Selector
          prev={setDate({ year: true, add: false })}
          next={setDate({ year: true, add: true })}
          small
        >
          {selectedDayjs.format(yearFormat)}
        </Selector>
      )}

      {!hideMonthSelector && (
        <Selector
          prev={setDate({ year: false, add: false })}
          next={setDate({ year: false, add: true })}
        >
          {selectedDayjs.format(
            !hideYearSelector ? monthFormat : monthYearFormat
          )}
        </Selector>
      )}

      <div
        css={`
          display: grid;
          grid-template: auto / repeat(7, 1fr);
        `}
      >
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
              onClick={() => onSelect(dayJs.toDate())}
            >
              <Text size="small">{dayJs.format(props.dayFormat)}</Text>
            </MonthDay>
          )
        })}
      </div>
    </div>
  )
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

export default DatePicker
