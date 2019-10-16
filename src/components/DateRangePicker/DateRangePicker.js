import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import { Button } from '../Button/Button'
import { useViewport } from '../../providers/Viewport/Viewport'
import { RADIUS } from '../../style'
import { useTheme } from '../../theme'
import DatePicker from './DatePicker'
import Labels from './Labels'
import { Controls, DatePickersWrapper } from './components'
import { START_DATE, END_DATE, INPUT_BORDER } from './consts'
import { handleDateSelect } from './utils'

const DateRangePicker = props => {
  const [showPicker, setShowPicker] = useState(false)
  const [startDate, setStartDate] = useState(props.startDate)
  const [endDate, setEndDate] = useState(props.endDate)

  const handleLabelsClick = () => {
    setShowPicker(!showPicker)
  }

  const rootRef = useRef()
  const handleClickOutside = event => {
    if (rootRef.current && !rootRef.current.contains(event.target)) {
      setShowPicker(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleDateClick = date => {
    const result = handleDateSelect({
      date,
      startDate,
      endDate,
    })
    result.startDate !== undefined && setStartDate(result.startDate)
    result.endDate !== undefined && setEndDate(result.endDate)
  }

  const handleApply = () => {
    setShowPicker(false)

    if (startDate && endDate) {
      props.onChange({
        start: dayjs(startDate)
          .startOf('day')
          .toDate(),
        end: dayjs(endDate)
          .endOf('day')
          .toDate(),
      })
    }
  }

  const handleClear = () => {
    setStartDate(null)
    setEndDate(null)
    setShowPicker(false)

    props.onChange({
      start: null,
      end: null,
    })
  }

  const getLabelsProps = () => {
    const _startDate = showPicker ? startDate : props.startDate
    const _endDate = showPicker ? endDate : props.endDate
    return {
      startText: _startDate
        ? dayjs(_startDate).format(props.format)
        : START_DATE,
      endText: _endDate ? dayjs(_endDate).format(props.format) : END_DATE,
    }
  }

  const compactMode = useViewport().below('medium')

  const theme = useTheme()

  const { startDate: startDateProp, endDate: endDateProp } = props

  // if both dates are in the same month, use the right calendar for it,
  // and display month before on the left calendar
  const propsDatesInSameMonth =
    startDateProp &&
    endDateProp &&
    dayjs(startDateProp).isSame(dayjs(endDateProp), 'month')

  const displayMonthBeforeOnLeft = compactMode
    ? false
    : propsDatesInSameMonth || !startDateProp

  return (
    <div
      css={`
        position: relative;
        width: 219px;
        border: ${startDateProp && endDateProp
          ? `${INPUT_BORDER}px solid ${theme.accent}`
          : `${INPUT_BORDER}px solid ${theme.border}`};
        border-radius: ${RADIUS}px;
        &:after {
          content: '';
          position: absolute;
          z-index: 0;
          top: 0;
          left: 0;
          border-radius: ${RADIUS}px;
          background: ${theme.surface};
          width: 100%;
          height: 100%;
        }
      `}
      ref={rootRef}
    >
      <Labels
        {...getLabelsProps()}
        enabled={showPicker}
        onClick={handleLabelsClick}
      />
      {showPicker && (
        <div
          css={`
            position: absolute;
            top: calc(100% + ${INPUT_BORDER * 2}px);
            left: -${INPUT_BORDER}px;
            z-index: 10;
            padding: 20px 18px 23px 18px;
            border: 1px solid ${theme.border};
            border-radius: ${RADIUS}px;
            background: ${theme.surface};
          `}
        >
          <DatePickersWrapper>
            <DatePicker
              datesRangeStart={startDate}
              datesRangeEnd={endDate}
              onSelect={handleDateClick}
              initialDate={dayjs(startDateProp || undefined)
                .subtract(displayMonthBeforeOnLeft ? 1 : 0, 'month')
                .toDate()}
            />
            {!compactMode && (
              <DatePicker
                datesRangeStart={startDate}
                datesRangeEnd={endDate}
                onSelect={handleDateClick}
                initialDate={dayjs(endDateProp || undefined).toDate()}
                css={`
                  margin-left: 9px;
                `}
              />
            )}
          </DatePickersWrapper>

          <Controls>
            <Button wide size="small" onClick={handleClear}>
              Reset
            </Button>
            <Button
              wide
              css={`
                margin-left: 12px;
              `}
              mode="strong"
              size="small"
              onClick={handleApply}
              disabled={!startDate || !endDate}
            >
              Apply
            </Button>
          </Controls>
        </div>
      )}
    </div>
  )
}

DateRangePicker.propTypes = {
  format: PropTypes.string,
  onChange: PropTypes.func,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
}

DateRangePicker.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: () => {},
}

export { DateRangePicker }
export default DateRangePicker
