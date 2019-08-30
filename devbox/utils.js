import seedrandom from 'seedrandom'

export function createRandomInt(seed = '') {
  const random = seedrandom(seed)
  return function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(random() * (max - min)) + min
  }
}

export function seedShuffleArray(array, seed = '') {
  const random = seedrandom(seed)
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

export function multiplyArray(base, times) {
  return [...Array(times)].reduce(v => [...v, ...base], [])
}
