import { round } from './math';

export const formatIntegerRange = (
  count = -1,
  min = 0,
  max = 99,
  maxSuffix = ''
) => {
  count = parseInt(count, 10)
  if (count <= min) {
    return `${parseInt(min, 10)}`
  }
  if (count > max) {
    return `${parseInt(max, 10)}${maxSuffix}`
  }
  return count.toString()
}

/**
 * Formats number to a more readable string
 *
 * @param {number} number Number to convert
 * @returns {string} Formatted number
 */
export function formatNumber(number) {
  return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,}).format(number)
}

/**
 * Builds on top on formatNumber(), and extends it with options for formatting tokens
 *
 * @param {number} amount Number to round
 * @param {string} symbol Symbol for the token amount
 * @param {number} decimals Decimal placement for amount
 * @param {number} returnToDecimals Rounds the number to a given decimal place
 * @param {boolean} isIncoming Decides if a plus or negative should be used
 * @param {boolean} signDisplay Decides if the sign should be displayed
 * @returns {string} Formatted token
 */
export function formatTokenAmount(
  amount,
  symbol,
  decimals = 18,
  rountToDecimals = 2,
  isIncoming = true,
  signDisplay = false
) {
  const number = round(
    (amount / Math.pow(10, decimals)),
    rountToDecimals
  )
  const formattedNumber = formatNumber(number)
  const sign = signDisplay ? (isIncoming ? '+' : '-') : ''
  return `${sign}${formattedNumber} ${symbol}`
}