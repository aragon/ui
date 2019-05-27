import dayjs from 'dayjs'

const differenceInYears = (a, b) => dayjs(a).diff(b, 'year')
const differenceInMonths = (a, b) => dayjs(a).diff(b, 'month')
const differenceInDays = (a, b) => dayjs(a).diff(b, 'day')
const differenceInHours = (a, b) => dayjs(a).diff(b, 'hour')
const differenceInMinutes = (a, b) => dayjs(a).diff(b, 'minute')
const differenceInSeconds = (a, b) => dayjs(a).diff(b, 'second')

const subYears = (a, value) => dayjs(a).subtract(value, 'year')
const subMonths = (a, value) => dayjs(a).subtract(value, 'month')
const subDays = (a, value) => dayjs(a).subtract(value, 'day')
const subHours = (a, value) => dayjs(a).subtract(value, 'hour')
const subMinutes = (a, value) => dayjs(a).subtract(value, 'minute')
const subSeconds = (a, value) => dayjs(a).subtract(value, 'second')

const fnsByUnit = [
  ['years', differenceInYears, subYears],
  ['months', differenceInMonths, subMonths],
  ['days', differenceInDays, subDays],
  ['hours', differenceInHours, subHours],
  ['minutes', differenceInMinutes, subMinutes],
  ['seconds', differenceInSeconds, subSeconds],
]

const DEFAULT_UNITS = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']

// Return the difference between two dates, per unit.
// Set `units` to get specific units only, e.g. ['minutes', 'seconds']
// If `units` is not set, all the units are enabled.
export const difference = (date1, date2, options = {}) => {
  const units = options.units || DEFAULT_UNITS
  const maxUnits = options.maxUnits || -1
  const keepLeadingZeros =
    (maxUnits === -1 && options.keepLeadingZeros) || false

  const start = date2 > date1 ? date1 : date2

  const getRightMostUnitIndex = () =>
    [...fnsByUnit].reverse().find(([unit]) => units.includes(unit))[0]

  return fnsByUnit.reduce(
    (result, [name, differenceInUnit, subUnit], index) => {
      result[name] = null

      // fill the current unit, subtract the difference from the remaining
      if (
        (maxUnits === -1 || result.remainingUnits > 0) &&
        units.includes(name)
      ) {
        result[name] = differenceInUnit(result.remaining, start)
        result.remaining = subUnit(result.remaining, result[name])
      }

      // remove leading zeros
      if (!keepLeadingZeros && !result.seenNonZero) {
        if (result[name] === 0) {
          result[name] = null
        } else {
          result.seenNonZero = true
        }
      }

      // enforce the maxUnits option
      if (result.remainingUnits > 0 && result.seenNonZero) {
        result.remainingUnits -= 1
      }

      // last iteration
      if (index === fnsByUnit.length - 1) {
        delete result.remaining
        delete result.remainingUnits
        delete result.seenNonZero

        // include at least one 0
        if (Object.values(result).every(val => val === null)) {
          result[getRightMostUnitIndex()] = 0
        }
      }

      return result
    },
    {
      remaining: start === date1 ? date2 : date1,
      remainingUnits: maxUnits,
      seenNonZero: false,
    }
  )
}

export const formatHtmlDatetime = date => dayjs(date).toISOString()
