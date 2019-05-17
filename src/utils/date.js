import {
  format,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  subYears,
  subMonths,
  subDays,
  subHours,
  subMinutes,
  subSeconds,
} from 'date-fns'

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

      // fill the current unit, substract the difference from the remaining
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

export const formatHtmlDatetime = date =>
  format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
