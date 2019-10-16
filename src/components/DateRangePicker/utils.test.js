import dayjs from 'dayjs'

import { handleDateSelect } from './utils'

describe('handleDateSelect', () => {
  const date = dayjs().toDate()

  it('sets start date if no dates are set', () => {
    const result = handleDateSelect({
      date,
    })
    expect(result).toEqual({
      startDate: date,
    })
  })

  it('sets end date if start date is set', () => {
    const startDate = dayjs()
      .subtract(1, 'month')
      .toDate()
    const result = handleDateSelect({
      date,
      startDate,
    })
    expect(result).toEqual({
      endDate: date,
    })
  })

  it('sets start date if end date is set', () => {
    const endDate = dayjs()
      .add(1, 'month')
      .toDate()
    const result = handleDateSelect({
      date,
      endDate,
    })
    expect(result).toEqual({
      startDate: date,
    })
  })

  it('cancels start date if same date is passed', () => {
    expect(
      handleDateSelect({
        date,
        startDate: date,
      })
    ).toEqual({ startDate: null })
  })

  it('cancels end date if same date is passed', () => {
    expect(
      handleDateSelect({
        date,
        endDate: date,
      })
    ).toEqual({ endDate: null })
  })

  it('handles start date adjustment', () => {
    const date = dayjs()
      .subtract(2, 'month')
      .toDate()

    const result = handleDateSelect({
      date,
      startDate: dayjs()
        .subtract(1, 'month')
        .toDate(),
      endDate: dayjs()
        .add(1, 'month')
        .toDate(),
    })
    expect(result).toEqual({
      startDate: date,
    })
  })

  it('handles end date adjustment', () => {
    const date = dayjs()
      .add(2, 'month')
      .toDate()

    const result = handleDateSelect({
      date,
      startDate: dayjs()
        .subtract(1, 'month')
        .toDate(),
      endDate: dayjs()
        .add(1, 'month')
        .toDate(),
    })
    expect(result).toEqual({
      endDate: date,
    })
  })

  it('reverses range if start date is set, but passed date is before it', () => {
    const date = dayjs()
      .subtract(1, 'month')
      .toDate()
    const startDate = dayjs().toDate()

    const result = handleDateSelect({
      date,
      startDate,
    })
    expect(result).toEqual({
      startDate: date,
      endDate: startDate,
    })
  })

  it('reverses range if end date is set, but passed date is after it', () => {
    const date = dayjs()
      .add(1, 'month')
      .toDate()
    const endDate = dayjs().toDate()

    const result = handleDateSelect({
      date,
      endDate,
    })
    expect(result).toEqual({
      endDate: date,
      startDate: endDate,
    })
  })
})
