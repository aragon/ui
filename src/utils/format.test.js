/* global BigInt */

import { formatIntegerRange, formatNumber, formatTokenAmount } from './format'
import { NO_BREAK_SPACE } from './characters'

describe('formatIntegerRange()', () => {
  test('should constrain the result in a range', () => {
    expect(formatIntegerRange(111)).toEqual('99')
    expect(formatIntegerRange(111, 0, 9)).toEqual('9')
    expect(formatIntegerRange(-234)).toEqual('0')
  })
  test('should add the suffix as needed', () => {
    expect(formatIntegerRange(9, 0, 9, '+')).toEqual('9')
    expect(formatIntegerRange(10, 0, 9, '+')).toEqual('9+')
  })
})

describe('formatNumber()', () => {
  test('should add commas', () => {
    expect(formatNumber(1)).toEqual('1')
    expect(formatNumber(12)).toEqual('12')
    expect(formatNumber(123)).toEqual('123')
    expect(formatNumber(1234)).toEqual('1,234')
    expect(formatNumber(12345)).toEqual('12,345')
    expect(formatNumber(123456)).toEqual('123,456')
    expect(formatNumber(1234567)).toEqual('1,234,567')
  })

  test('should work with decimals', () => {
    expect(formatNumber(1.3)).toEqual('1.3')
    expect(formatNumber(12.12)).toEqual('12.12')
    expect(formatNumber(123.123)).toEqual('123.123')
    expect(formatNumber(1234.1234)).toEqual('1,234.1234')
    expect(formatNumber(12345.12345)).toEqual('12,345.12345')
    expect(formatNumber(123456.123456)).toEqual('123,456.123456')
    expect(formatNumber(1234567.1234567)).toEqual('1,234,567.1234567')
  })

  test('should work with strings', () => {
    expect(formatNumber('123456123456')).toEqual('123,456,123,456')
    expect(formatNumber('1234567.1234567')).toEqual('1,234,567.1234567')
  })

  test('should work with BigInt', () => {
    expect(formatNumber(BigInt('123456123456239873298739287'))).toEqual(
      '123,456,123,456,239,873,298,739,287'
    )
  })
})

describe('formatTokenAmount()', () => {
  test('should handle native numbers', () => {
    expect(formatTokenAmount(9381295879707883945, 18, { digits: 1 })).toEqual(
      '9.4'
    )
  })

  test('should format numbers properly', () => {
    expect(
      formatTokenAmount('32989381295879707883945', 18, { digits: 4 })
    ).toEqual('32,989.3813')
  })

  test('should handle string numbers', () => {
    expect(
      formatTokenAmount('2839381295879707883945', 18, { digits: 18 })
    ).toEqual('2,839.381295879707883945')
  })

  test('should handle BigInt-like numbers', () => {
    expect(
      formatTokenAmount(BigInt('2839381295879707883945'), 18, { digits: 8 })
    ).toEqual('2,839.38129588')
  })

  test('should handle large numbers without decimals', () => {
    expect(
      formatTokenAmount(BigInt('2839000000000000000000'), 18, { digits: 8 })
    ).toEqual('2,839')
  })

  test('should handle really big numbers', () => {
    expect(
      formatTokenAmount(
        BigInt('9873298739827329832792839381295879707883945'),
        18,
        { digits: 8 }
      )
    ).toEqual('9,873,298,739,827,329,832,792,839.38129588')
  })

  test('should round properly', () => {
    expect(
      formatTokenAmount(BigInt('4442839381295879707883948'), 18, { digits: 17 })
    ).toEqual('4,442,839.38129587970788395')
  })

  test('should add add symbol', () => {
    expect(
      formatTokenAmount(BigInt('4442839381295879707883948'), 18, {
        digits: 17,
        symbol: 'ANT',
      })
    ).toEqual(`4,442,839.38129587970788395${NO_BREAK_SPACE}ANT`)
  })

  test('should remove trailing zeros', () => {
    expect(
      formatTokenAmount(BigInt('283938129587970000000'), 18, { digits: 18 })
    ).toEqual(`283.93812958797`)
  })

  test('should truncate decimals after the last significant digit', () => {
    expect(
      formatTokenAmount(BigInt('2839000000010000000000'), 18, { digits: 8 })
    ).toEqual('2,839.00000001')
    expect(
      formatTokenAmount(BigInt('2839000000010000000000'), 18, { digits: 9 })
    ).toEqual('2,839.00000001')
    expect(
      formatTokenAmount(BigInt('2839000000010000000000'), 18, { digits: 7 })
    ).toEqual('2,839')
  })

  test('should display the sign', () => {
    expect(
      formatTokenAmount(BigInt('4442839381295879707883948'), 18, {
        digits: 17,
        displaySign: true,
      })
    ).toEqual(`+4,442,839.38129587970788395`)

    expect(
      formatTokenAmount(BigInt('-4442839381295879707883948'), 18, {
        digits: 17,
        displaySign: true,
      })
    ).toEqual(`-4,442,839.38129587970788395`)

    expect(formatTokenAmount(0, 18, { digits: 17, displaySign: true })).toEqual(
      '+0'
    )
    // Todo: support negative 0s
    expect(
      formatTokenAmount(-0, 18, { digits: 17, displaySign: true })
    ).toEqual('+0')
  })

  test('should throw when a negative number is used for decimals', () => {
    expect(() => {
      formatTokenAmount(BigInt('2839000000010000000000'), -1)
    }).toThrow()
  })

  test('should throw when a negative number is being used for digits', () => {
    expect(() => {
      formatTokenAmount(BigInt('2839000000010000000000'), 18, { digits: -2 })
    }).toThrow()
  })
})
