/* global BigInt */

import { formatTokenAmount } from './format'

describe.only('formatTokenAmount()', () => {
  test('should handle native numbers', () => {
    expect(formatTokenAmount(9381295879707883945, 'ETH', 18, 1)).toEqual(
      '9.4 ETH'
    )
  })
  test('should handle string numbers', () => {
    expect(formatTokenAmount('2839381295879707883945', 'ETH', 18, 18)).toEqual(
      '2,839.381295879707883945 ETH'
    )
  })
  test('should handle BigInt-like numbers', () => {
    expect(
      formatTokenAmount(BigInt('2839381295879707883945'), 'ETH', 18, 18)
    ).toEqual('2,839.4 ETH')
  })
  test('should round properly', () => {
    expect(
      formatTokenAmount(BigInt('4442839.381295879707883948'), 'ETH', 18, 17)
    ).toEqual('4,442,839.38129587970788395 ETH')
  })
})
