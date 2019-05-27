import dayjs from 'dayjs'
import { difference } from './date'

const NOW = new Date()

const add = (date, value, unit) =>
  dayjs(date)
    .add(value, unit)
    .toDate()

const sub = (date, value, unit) =>
  dayjs(date)
    .subtract(value, unit)
    .toDate()

describe('difference()', () => {
  test('should return the exact number of each unit', () => {
    expect(difference(NOW, add(NOW, 1, 'day'))).toEqual({
      years: null,
      months: null,
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })

    expect(difference(NOW, add(NOW, 1, 'second'))).toEqual({
      years: null,
      months: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: 1,
    })
  })

  test('should behave as expected when compared with the same date', () => {
    expect(difference(NOW, NOW)).toEqual({
      years: null,
      months: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: 0,
    })
  })

  test('should always be a positive', () => {
    expect(difference(NOW, sub(NOW, 1, 'minute'))).toEqual({
      years: null,
      months: null,
      days: null,
      hours: null,
      minutes: 1,
      seconds: 0,
    })
  })

  test('should allow to disable some units', () => {
    expect(
      difference(NOW, add(NOW, 1, 'day'), {
        units: ['days'],
      })
    ).toEqual({
      years: null,
      months: null,
      days: 1,
      hours: null,
      minutes: null,
      seconds: null,
    })
  })

  test('should keep at least one unit even at zero', () => {
    expect(
      difference(NOW, add(NOW, 1, 'day'), {
        units: ['years'],
      })
    ).toEqual({
      years: 0,
      months: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    })
  })

  test('should respect the keepLeadingZeros option', () => {
    expect(
      difference(NOW, add(NOW, 1, 'day'), {
        keepLeadingZeros: true,
      })
    ).toEqual({
      years: 0,
      months: 0,
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })

    expect(
      difference(NOW, add(NOW, 1, 'day'), {
        keepLeadingZeros: true,
        units: ['seconds'],
      })
    ).toEqual({
      years: null,
      months: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: 86400,
    })

    expect(
      difference(NOW, add(NOW, 1, 'day'), {
        keepLeadingZeros: true,
        units: ['minutes', 'seconds'],
      })
    ).toEqual({
      years: null,
      months: null,
      days: null,
      hours: null,
      minutes: 1440,
      seconds: 0,
    })
  })

  test('should respect the maxUnits option', () => {
    expect(
      difference(NOW, add(NOW, 1, 'day'), {
        maxUnits: 1,
      })
    ).toEqual({
      years: null,
      months: null,
      days: 1,
      hours: null,
      minutes: null,
      seconds: null,
    })

    expect(
      difference(NOW, add(NOW, 1, 'day'), {
        maxUnits: 3,
      })
    ).toEqual({
      years: null,
      months: null,
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: null,
    })
  })

  test('should ignore the keepLeadingZeros option if maxUnits is set', () => {
    expect(
      difference(NOW, add(NOW, 1, 'day'), {
        keepLeadingZeros: true,
        maxUnits: 3,
      })
    ).toEqual({
      years: null,
      months: null,
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: null,
    })
  })
})
