/* global BigInt */

import { divideRoundBigInt } from './math'

describe('divideRoundBigInt()', () => {
  test('should round the result', () => {
    expect(divideRoundBigInt(BigInt('479238'), BigInt('10'))).toEqual('47924')
  })
})
