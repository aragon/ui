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

export function formatNumber(number) {
  return new Intl.NumberFormat('en-US', {minimumFractionDigits: 0,}).format(number)
}

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