import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

import { Button } from '../Button/Button'
import { useViewport } from '../../providers/Viewport/Viewport'
import { RADIUS, breakpoint, GU } from '../../style'
import { useTheme } from '../../theme'
import DatePicker from './DatePicker'
import Labels from './Labels'
import { Controls, Wrap } from './components'
import { START_DATE, END_DATE, INPUT_HEIGHT, INPUT_BORDER } from './consts'
import { handleDateSelect } from './utils'

const DateRange = props => {
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

  const handleApply = e => {
    e.preventDefault()
    e.stopPropagation()
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

  const handleClear = e => {
    e.preventDefault()
    e.stopPropagation()

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
        height: ${INPUT_HEIGHT}px;
        width: ${GU * 31}px;
        position: relative;
        border: ${startDateProp && endDateProp
          ? `${INPUT_BORDER}px solid ${theme.accent}`
          : `${INPUT_BORDER}px solid ${theme.border}`};
        border-radius: ${RADIUS}px;
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
            top: ${INPUT_HEIGHT}px;
            left: -${INPUT_BORDER}px;
            z-index: 10;
            border: 1px solid ${theme.border};
            border-radius: ${RADIUS}px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
            background: ${theme.surface};
          `}
        >
          <Wrap>
            <DatePicker
              datesRangeStart={startDate}
              datesRangeEnd={endDate}
              onSelect={handleDateClick}
              overlay={false}
              initialDate={dayjs(startDateProp || undefined)
                .subtract(displayMonthBeforeOnLeft ? 1 : 0, 'month')
                .toDate()}
            />
            {!compactMode && (
              <DatePicker
                datesRangeStart={startDate}
                datesRangeEnd={endDate}
                onSelect={handleDateClick}
                overlay={false}
                initialDate={dayjs(endDateProp || undefined).toDate()}
              />
            )}
          </Wrap>

          <Controls>
            <Button onClick={handleClear}>Clear</Button>
            <Button
              css={`
                ${breakpoint(
                  'medium',
                  `
                      margin-left: 19px;
                    `
                )}
              `}
              mode="strong"
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

DateRange.propTypes = {
  format: PropTypes.string,
  onChange: PropTypes.func,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
}

DateRange.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: () => {},
}

export { DateRange }
