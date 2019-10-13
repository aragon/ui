import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import dayjs from 'dayjs'
import ButtonBase from '../ButtonBase/ButtonBase'
import Text from '../Text/Text'
import { GU } from '../../style'
import { useTheme } from '../../theme'
import { eachDayOfInterval } from '../../utils'
import isBetween from 'dayjs/plugin/isBetween'

const infinityRange = 8

dayjs.extend(isBetween)

class DatePicker extends React.PureComponent {
  state = {
    value: this.props.endDate || this.props.startDate || new Date(),
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
      startDate,
      endDate,
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
    const editedDate = endDate || startDate
    const today = dayjs()
      .startOf('day')
      .toDate()
    const { value: selected = today } = this.state
    const selectedDayjs = dayjs(selected)

    const isDayBetween = day =>
      (!!startDate &&
        (!!endDate && day.isBetween(startDate, dayjs(endDate).endOf('day')))) ||
      (!endDate &&
        day.isBetween(startDate, dayjs(startDate).add(infinityRange, 'day'))) ||
      (!startDate &&
        !!endDate &&
        day.isBetween(dayjs(endDate).subtract(infinityRange, 'day'), endDate))

    const isDayInfiniteMarker = day => {
      return (
        (!!startDate &&
          !endDate &&
          day.isSame(dayjs(startDate).add(infinityRange, 'day')) &&
          'start') ||
        (!startDate &&
          !!endDate &&
          day.isSame(dayjs(endDate).subtract(infinityRange, 'day'), 'day') &&
          'end')
      )
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
                selected={day.isSame(editedDate, 'day')}
                today={day.isSame(today, 'day')}
                startDate={startDate && day.isSame(startDate, 'day')}
                endDate={endDate && day.isSame(endDate, 'day')}
                between={isDayBetween(day)}
                infinite={isDayInfiniteMarker(day)}
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
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
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
  grid-gap: 0.25em;
  grid-template: auto / repeat(7, 1fr);
  list-style: none;
`

/* eslint-disable react/prop-types */
const DayView = function({
  disabled,
  selected,
  today,
  startDate,
  endDate,
  between,
  infinite,
  ...props
}) {
  const theme = useTheme()

  const DAY_SELECTION_WIDTH = '2.571em'

  const children = (
    <div
      css={`
        z-index: 100;
      `}
    >
      {props.children}
    </div>
  )
  const wrappedProps = { ...props, children }

  const betweenMarkerPosition = css`
    bottom: calc(${DAY_SELECTION_WIDTH} / 4);
    height: calc(${DAY_SELECTION_WIDTH} / 1.66);
    opacity: 0.5;
  `

  return (
    <li
      css={`
        position: relative;
        width: ${DAY_SELECTION_WIDTH};
        height: ${DAY_SELECTION_WIDTH};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        cursor: pointer;
        font-size: 90%;
        user-select: none;

        ${today &&
          css`
            top: 1px;
            border: 1px solid ${theme.accent};
          `}

        ${disabled &&
          css`
            pointer-events: none;
            color: ${theme.disabled};
          `}

				${(selected || startDate || endDate) &&
          !disabled &&
          css`
            &&& {
              z-index: 100;
              background: ${theme.accent};
              border-color: ${theme.accent};
              color: ${theme.positiveContent};
            }
          `}

					${startDate &&
            !disabled &&
            css`
              &:after {
                position: absolute;
                left: calc(${DAY_SELECTION_WIDTH} / 2);
                width: calc(${DAY_SELECTION_WIDTH} / 2 + 2px);

                background: ${theme.accent};
                ${betweenMarkerPosition}
              }
            `}

					${(selected || endDate) &&
            !disabled &&
            css`
              &:after {
                position: absolute;
                right: calc(${DAY_SELECTION_WIDTH} / 2);
                width: calc(${DAY_SELECTION_WIDTH} / 2 + 2px);
                background: ${theme.accent};
                ${betweenMarkerPosition}
              }
            `}

					${between &&
            !selected &&
            !disabled &&
            css`
              &:after {
                position: absolute;
                z-index: 50;
                width: calc(${DAY_SELECTION_WIDTH} + 4px);
                background: ${theme.accent};
                ${betweenMarkerPosition}
              }
            `}

						${infinite &&
              !disabled &&
              css`
              &:after {
                position: absolute;
                z-index: 50;
                width: calc(${DAY_SELECTION_WIDTH} + 4px);
								${infinite === 'start' &&
                  `background-image: linear-gradient(to right, ${theme.accent}, transparent);`}
								${infinite === 'end' &&
                  `background-image: linear-gradient(to right, transparent, ${theme.accent});`}
                ${betweenMarkerPosition}
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
      {...wrappedProps}
    />
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

/*
 * TODO write a wrapper so once can use DatePicker standalone
 * with currentDate instead of Start/End
 */

export default DatePicker
