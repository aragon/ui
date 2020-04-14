import JSBI from 'jsbi'
import { NO_BREAK_SPACE } from './characters'
import { divideRoundBigInt, toJsbi } from './math'

/**
 * Formats an integer based on a limited range.
 *
 * Example:
 *   formatIntegerRange(234, 0, 99, '+') === "99+"
 *
 * @param {number} value     The number to format.
 * @param {number} min       Range minimum.
 * @param {number} max       Range maximum.
 * @param {number} maxSuffix Suffix to add if the value exceeds the max.
 */
export function formatIntegerRange(
  value = -1,
  min = 0,
  max = 99,
  maxSuffix = ''
) {
  value = parseInt(value, 10)
  if (value <= min) {
    return `${parseInt(min, 10)}`
  }
  if (value > max) {
    return `${parseInt(max, 10)}${maxSuffix}`
  }
  return String(value)
}

/**
 * Formats a number for display purposes.
 *
 * This function is not using Intl.NumberFormat() to be compatible with big
 * integers expressed as string, or BigInt-like objects.
 *
 * @param {BigInt|string|number} number Number to convert
 * @returns {string}
 */
export function formatNumber(number) {
  const numAsString = String(number)
  const [integer, decimals] = numAsString.split('.')

  return [...integer].reverse().reduce(
    (result, digit, index) => {
      return digit + (index > 0 && index % 3 === 0 ? ',' : '') + result
    },
    decimals ? `.${decimals}` : ''
  )
}

/**
 * Formats a token amount for display purposes.
 *
 * @param {BigInt|string|number} amount              Number to round
 * @param {BigInt|string|number} decimals            Decimal placement for amount
 * @param {BigInt|string|number} digits              Rounds the number to a given decimal place
 * @param {boolean}              options.displaySign Decides if the sign should be displayed
 * @param {string}               options.symbol      Symbol for the token amount
 * @returns {string}
 */
export function formatTokenAmount(
  amount,
  decimals,
  { digits = 2, symbol = '', displaySign = false } = {}
) {
  amount = toJsbi(amount)
  decimals = toJsbi(decimals)
  digits = toJsbi(digits)

  if (JSBI.lessThan(decimals, 0)) {
    throw new Error('formatTokenAmount(): decimals cannot be negative')
  }

  if (JSBI.lessThan(digits, 0)) {
    throw new Error('formatTokenAmount(): digits cannot be negative')
  }

  const _0 = JSBI.BigInt(0)
  const _10 = JSBI.BigInt(10)
  const negative = JSBI.lessThan(amount, _0)

  if (negative) {
    amount = JSBI.unaryMinus(amount)
  }

  const amountConverted = JSBI.BigInt(
    divideRoundBigInt(
      amount,
      JSBI.exponentiate(_10, JSBI.subtract(decimals, digits))
    )
  )

  const leftPart = formatNumber(
    JSBI.divide(amountConverted, JSBI.exponentiate(_10, digits))
  )

  const rightPart = String(
    JSBI.remainder(amountConverted, JSBI.exponentiate(_10, digits))
  )
    .padStart(digits, '0')
    .replace(/0+$/, '')

  return [
    displaySign ? (negative ? '-' : '+') : '',
    leftPart,
    rightPart ? `.${rightPart}` : '',
    symbol ? `${NO_BREAK_SPACE}${symbol}` : '',
  ].join('')
}
