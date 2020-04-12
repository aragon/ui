import TokenAmount from './TokenAmount'

describe('TokenAmount', () => {
  test('should instanciate from an amount expressed as a Number', () => {
    expect(new TokenAmount(91234, 4).format()).toEqual('9.12')
  })
})
describe('TokenAmount#amount()', () => {
  test('should export the amount as a BigInt', () => {
    expect(new TokenAmount('9381295879707883945', 18).amount()).toEqual(
      9381295879707883945n
    )
  })
})

describe('TokenAmount#amountString()', () => {
  test('should export the amount as a String', () => {
    expect(new TokenAmount('9381295879707883945', 18).amountString()).toEqual(
      '9381295879707883945'
    )
  })
})

describe('TokenAmount#toJSON()', () => {
  test('should serialize properly', () => {
    expect(new TokenAmount('9381295879707883945', 18).toJSON()).toEqual({
      amount: '9381295879707883945',
      decimals: '18',
      symbol: '',
    })
    expect(JSON.stringify(new TokenAmount('9381295879707883945', 18))).toEqual(
      JSON.stringify({
        amount: '9381295879707883945',
        decimals: '18',
        symbol: '',
      })
    )
  })
})

describe('TokenAmount.fromJSON()', () => {
  test('should deserialize properly', () => {
    expect(
      TokenAmount.fromJSON(
        JSON.stringify(new TokenAmount('9381295879707883945', 18))
      ).toJSON()
    ).toEqual({
      amount: '9381295879707883945',
      decimals: '18',
      symbol: '',
    })
  })
})
