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
