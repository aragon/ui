export const formatCount = (count = -1, max = 99) => {
  count = parseInt(count, 10)
  if (count < 1) {
    return '0'
  }
  if (count > max) {
    return `${parseInt(max, 10)}`
  }
  return count.toString()
}
