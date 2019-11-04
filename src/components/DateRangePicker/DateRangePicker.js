import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import { Button } from '../Button/Button'
import { useViewport } from '../../providers/Viewport/Viewport'
import { BREAKPOINTS, GU, RADIUS } from '../../style'
import { useTheme } from '../../theme'
import DatePicker from './DatePicker'
import Labels from './Labels'
import { Controls } from './components'
import { START_DATE, END_DATE } from './consts'
import { handleDateSelect } from './utils'
import Popover from '../Popover/Popover'

function DateRangePicker({
  format,
  endDate: endDateProp,
  onChange,
  startDate: startDateProp,
}) {
  const theme = useTheme()
  const labelsRef = useRef()
  const [showPicker, setShowPicker] = useState(false)
  const [startDate, setStartDate] = useState(startDateProp)
  const [endDate, setEndDate] = useState(endDateProp)

  // on closing the picked, reset state
  useEffect(() => {
    if (!showPicker) {
      setStartDate(startDateProp)
      setEndDate(endDateProp)
    }
  }, [endDateProp, startDateProp, showPicker])

  const handlePopoverClose = useCallback(() => setShowPicker(false), [])

  const handleLabelsClick = useCallback(() => {
    setShowPicker(show => !show)
  }, [])

  const handleDateClick = useCallback(
    date => {
      const result = handleDateSelect({ date, startDate, endDate })
      result.startDate !== undefined && setStartDate(result.startDate)
      result.endDate !== undefined && setEndDate(result.endDate)
    },
    [startDate, endDate]
  )

  const handleApply = useCallback(() => {
    setShowPicker(false)

    if (startDate && endDate) {
      onChange({
        start: dayjs(startDate)
          .startOf('day')
          .toDate(),
        end: dayjs(endDate)
          .endOf('day')
          .toDate(),
      })
    }
  }, [endDate, onChange, startDate])

  const handleClear = useCallback(() => {
    setStartDate(null)
    setEndDate(null)
    setShowPicker(false)
    onChange({ start: null, end: null })
  }, [onChange])

  const labelProps = useMemo(() => {
    const _startDate = showPicker ? startDate : startDateProp
    const _endDate = showPicker ? endDate : endDateProp
    return {
      startText: _startDate ? dayjs(_startDate).format(format) : START_DATE,
      endText: _endDate ? dayjs(_endDate).format(format) : END_DATE,
    }
  }, [endDate, endDateProp, format, showPicker, startDate, startDateProp])

  const compactMode = useViewport().below('medium')

  const displayMonthBeforeOnLeft = useMemo(() => {
    // If both dates are in the same month, use the right calendar
    // for it, and display month before on the left calendar.
    const propsDatesInSameMonth =
      startDateProp &&
      endDateProp &&
      dayjs(startDateProp).isSame(dayjs(endDateProp), 'month')

    return !compactMode && (propsDatesInSameMonth || !startDateProp)
  }, [compactMode, endDateProp, startDateProp])

  return (
    <div>
      <Labels
        ref={labelsRef}
        enabled={showPicker}
        hasSetDates={Boolean(startDateProp && endDateProp)}
        onClick={handleLabelsClick}
        {...labelProps}
      />
      <Popover
        closeOnOpenerFocus
        onClose={handlePopoverClose}
        opener={labelsRef.current}
        placement="bottom-start"
        visible={showPicker}
        css={`
          min-width: ${37.5 * GU + 2}px;
          border: 0;
          filter: none;
          background: none;
          margin: 2px 0 0 0;
        `}
      >
        <div
          css={`
            padding: ${2.5 * GU}px ${3 * GU}px ${3 * GU}px;
            border: 1px solid ${theme.border};
            border-radius: ${RADIUS}px;
            background: ${theme.surface};
          `}
        >
          <div
            css={`
              display: flex;
              flex-direction: row;
              align-items: baseline;
            `}
          >
            <DatePicker
              datesRangeEnd={endDate}
              datesRangeStart={startDate}
              initialDate={dayjs(startDateProp || undefined)
                .subtract(displayMonthBeforeOnLeft ? 1 : 0, 'month')
                .toDate()}
              onSelect={handleDateClick}
            />
            {!compactMode && (
              <DatePicker
                datesRangeEnd={endDate}
                datesRangeStart={startDate}
                initialDate={dayjs(endDateProp || undefined).toDate()}
                onSelect={handleDateClick}
                css={`
                  margin-left: ${1 * GU}px;
                `}
              />
            )}
          </div>

          <div
            css={`
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: ${GU * 2.25}px;

              ${compactMode
                ? ''
                : `
                    max-width: 247px;
                    margin-left: auto;
                  `};
            `}
          >
            <Button onClick={handleClear} size="small" wide>
              Reset
            </Button>
            <Button
              disabled={!startDate || !endDate}
              mode="strong"
              onClick={handleApply}
              size="small"
              wide
              css={`
                margin-left: ${1.5 * GU}px;
              `}
            >
              Apply
            </Button>
          </div>
        </div>
      </Popover>
    </div>
  )
}

DateRangePicker.propTypes = {
  endDate: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  onChange: PropTypes.func,
  startDate: PropTypes.instanceOf(Date),
}

DateRangePicker.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: () => {},
}

export default DateRangePicker
