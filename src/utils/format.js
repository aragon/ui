export const formatNumber = (count = -1, max = 99, replacementSuffix = '') => {
  count = parseInt(count, 10)
  if (count < 1) {
    return '0'
  }
  if (count > max) {
    return `${parseInt(max, 10)}${replacementSuffix}`
  }
  return count.toString()
}
