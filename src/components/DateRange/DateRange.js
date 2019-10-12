import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { Button } from '../Button/Button'
import { IconCalendar } from '../../icons/components'
import { useViewport } from '../../providers/Viewport/Viewport'
import { GU, RADIUS, breakpoint, textStyle } from '../../style'
import { useTheme } from '../../theme'
import { unselectable } from '../../utils'
import DatePicker from './DatePicker'

const INPUT_HEIGHT = 5 * GU
const INPUT_HEIGHT_WITHOUT_BORDER = INPUT_HEIGHT - 2
const START_DATE = 'Start date'
const END_DATE = 'End date'

const Labels = ({ enabled, text, invalid }) => {
  const theme = useTheme()
  const color = invalid ? theme.hint : 'inherit'
  const [start, end] = text.split('|')
  return (
    <div
      css={`
        z-index: 2;
        cursor: pointer;
        background: ${theme.surface};
        ${unselectable}
      `}
    >
      <div
        css={`
          position: absolute;
          width: calc(100% - 28px);
          display: grid;
          grid-template-columns: 50% 2px 50%;
          align-items: center;
          height: ${INPUT_HEIGHT_WITHOUT_BORDER}px;
          overflow: hidden;
          color: ${color};
          ${textStyle('body2')}
        `}
      >
        <div css="text-align: center;">{start}</div>
        <div>|</div>
        <div css="text-align: center;">{end}</div>
      </div>
      <div
        css={`
          position: absolute;
          right: 4px;
          display: flex;
          align-items: center;
          height: ${INPUT_HEIGHT_WITHOUT_BORDER}px;
        `}
      >
        <IconCalendar
          css={`
            color: ${enabled ? theme.accent : theme.surfaceIcon};
          `}
        />
      </div>
    </div>
  )
}

Labels.propTypes = {
  enabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  invalid: PropTypes.bool,
}

class DateRangeInput extends React.PureComponent {
  state = {
    showPicker: false,
    startDate: this.props.startDate,
    endDate: this.props.endDate,
    startPicker: null,
    endPicker: null,
    startDateSelected: false,
    endDateSelected: false,
  }
  _datePickerContainer = React.createRef()

  get formattedStartDate() {
    const { format } = this.props
    const { startDate } = this.state
    const isDate = startDate instanceof Date

    return isDate ? dayjs(startDate).format(format) : ''
  }

  get formattedEndDate() {
    const { format } = this.props
    const { endDate } = this.state
    const isDate = endDate instanceof Date

    return isDate ? dayjs(endDate).format(format) : ''
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.showPicker !== prevState.showPicker) {
      const { startDate, endDate, compactMode } = this.props
      // unsetting selection for compact because it shows one calendar at a time
      /* eslint-disable */
      this.setState({
        startDateSelected: !compactMode && !!startDate,
        endDateSelected: !compactMode && !!endDate,
        startDate: !compactMode ? startDate : null,
        endDate: !compactMode ? endDate : null,
      })
      /* eslint-enable */
      if (this.state.showPicker) {
        document.addEventListener('mousedown', this.handleClickOutside)
      } else {
        document.removeEventListener('mousedown', this.handleClickOutside)
      }
    }
  }

  handleClick = event => {
    event.stopPropagation()
    if (
      !this._datePickerContainer.current ||
      !this._datePickerContainer.current.contains(event.target)
    ) {
      this.setState(({ showPicker }) => ({ showPicker: !showPicker }))
    }
  }

  handleClickOutside = event => {
    if (this.rootRef && !this.rootRef.contains(event.target)) {
      this.setState({ showPicker: false })
    }
  }

  handleSelectStartDate = date => {
    const { endDate } = this.state
    const isValidDate = !endDate || !dayjs(date).isAfter(endDate)
    if (isValidDate) {
      this.setState({
        startDateSelected: true,
        startDate: dayjs(date)
          .startOf('day')
          .toDate(),
      })
    }
  }

  handleSelectEndDate = date => {
    const { startDate } = this.state
    const isValidDate = !startDate || !dayjs(date).isBefore(startDate)
    if (isValidDate) {
      this.setState({
        endDateSelected: true,
        endDate: dayjs(date)
          .endOf('day')
          .toDate(),
      })
    }
  }

  handleApply = e => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ showPicker: false })

    const { startDate, endDate } = this.state
    const startDateAllowed = this.props.partial === 'end' || startDate
    const endDateAllowed = this.props.partial === 'start' || endDate

    if (startDateAllowed && endDateAllowed) {
      const start = startDate
        ? dayjs(startDate)
            .startOf('day')
            .toDate()
        : null
      const end = endDate
        ? dayjs(endDate)
            .endOf('day')
            .toDate()
        : null

      this.props.onChange({
        start,
        end,
      })
    }
  }

  handleClear = e => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ showPicker: false, startDate: null, endDate: null })
    this.props.onChange({
      start: null,
      end: null,
    })
  }

  getValueText = () => {
    const {
      compactMode,
      format,
      startDate: startDateProps,
      endDate: endDateProps,
    } = this.props
    const { showPicker, startDateSelected, endDateSelected } = this.state

    // closed
    // shows props, if props null then placeholder
    if (!showPicker) {
      const startStr = startDateProps
        ? dayjs(startDateProps).format(format)
        : START_DATE
      // Ok seriously
      // startStr should be Start Date when there's nothing
      const endStr = endDateProps
        ? dayjs(endDateProps).format(format)
        : END_DATE
      return `${startStr} | ${endStr}`
    }

    // opened
    // shows constants, till dates selected
    if (compactMode) {
      return `${startDateSelected ? this.formattedStartDate : START_DATE} | ${
        endDateSelected ? this.formattedEndDate : END_DATE
      }`
    }

    //  shows props, changes with selection
    return `${
      this.formattedStartDate ? this.formattedStartDate : START_DATE
    } | ${this.formattedEndDate ? this.formattedEndDate : END_DATE}`
  }

  render() {
    const {
      startDate,
      endDate,
      startDateSelected,
      endDateSelected,
      showPicker,
    } = this.state
    const {
      compactMode,
      theme,
      startDate: startDateProps,
      endDate: endDateProps,
    } = this.props

    const partial = this.props.partial
    const invalid =
      (partial !== 'end' && !startDateSelected) ||
      (partial !== 'start' && !endDateSelected)

    return (
      <div
        css={`
          height: ${INPUT_HEIGHT}px;
          width: 250px;
          position: relative;
          border: ${startDateProps && endDateProps
            ? `1px solid ${theme.accent}`
            : `1px solid ${theme.border}`};
          border-radius: ${RADIUS}px;
        `}
        ref={el => (this.rootRef = el)}
        onClick={this.handleClick}
      >
        <Labels
          enabled={showPicker}
          text={this.getValueText()}
          invalid={invalid}
        />
        {this.state.showPicker && (
          <div
            ref={this._datePickerContainer}
            css={`
              position: absolute;
              top: ${INPUT_HEIGHT_WITHOUT_BORDER}px;
              z-index: 10;
              border: 1px solid ${theme.border};
              border-radius: ${RADIUS}px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
              background: ${theme.surface};
            `}
          >
            <Wrap>
              {(!compactMode || !startDateSelected) && (
                <DatePicker
                  name="Start date"
                  currentDate={startDate}
                  onSelect={this.handleSelectStartDate}
                  overlay={false}
                />
              )}
              {(!compactMode || startDateSelected) && (
                <DatePicker
                  name="End date"
                  currentDate={endDate}
                  onSelect={this.handleSelectEndDate}
                  overlay={false}
                />
              )}
            </Wrap>

            <Controls>
              <Button onClick={this.handleClear}>Clear</Button>
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
                onClick={this.handleApply}
                disabled={invalid}
              >
                Apply
              </Button>
            </Controls>
          </div>
        )}
      </div>
    )
  }
}

DateRangeInput.propTypes = {
  endDate: PropTypes.instanceOf(Date),
  format: PropTypes.string,
  // partial is 'start' if beginning is required, 'end' if end is required
  partial: PropTypes.string,
  onChange: PropTypes.func,
  startDate: PropTypes.instanceOf(Date),
  compactMode: PropTypes.bool,
  theme: PropTypes.object.isRequired,
}

DateRangeInput.defaultProps = {
  format: 'MM/DD/YYYY',
  onChange: () => {},
  partial: null,
}

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  padding: 0 8px;

  ${breakpoint(
    'medium',
    `
      display: block;
      text-align: right;
    `
  )}
`

const Wrap = styled.div`
  > div {
    border: 0;
    box-shadow: none;
  }

  ${breakpoint(
    'medium',
    `
      display: flex;
      flex-direction: row;
      align-items: baseline;
    `
  )}
`

const DateRange = props => {
  const { below } = useViewport()
  const theme = useTheme()
  return (
    <DateRangeInput compactMode={below('medium')} theme={theme} {...props} />
  )
}

export { DateRange }
