import seedrandom from 'seedrandom'

const random = seedrandom('')

export const createAddress = () => {
  const random = seedrandom('')
  return () =>
    '0x' +
    [...Array(4)]
      .map(_ =>
        Math.round(random() * 0xffffffffff)
          .toString(16)
          .padStart(10, '0')
      )
      .join('')
}
