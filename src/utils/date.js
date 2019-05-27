import dayjs from 'dayjs'

const UNITS = [
  ['years', 'year'],
  ['months', 'month'],
  ['days', 'day'],
  ['hours', 'hour'],
  ['minutes', 'minute'],
  ['seconds', 'second'],
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
    [...UNITS].reverse().find(([unit]) => units.includes(unit))[0]

  return UNITS.reduce(
    (result, [name, unitName], index) => {
      result[name] = null

      // fill the current unit, subtract the difference from the remaining
      if (
        (maxUnits === -1 || result.remainingUnits > 0) &&
        units.includes(name)
      ) {
        result[name] = result.remaining.diff(start, unitName)
        result.remaining = result.remaining.subtract(result[name], unitName)
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
      if (index === UNITS.length - 1) {
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
      remaining: dayjs(start === date1 ? date2 : date1),
      remainingUnits: maxUnits,
      seenNonZero: false,
    }
  )
}

export const formatHtmlDatetime = date => dayjs(date).toISOString()
