/* global BigInt */

import JSBI from 'jsbi'
import { formatTokenAmount } from './format'

class TokenAmount {
  #amount
  #decimals
  #symbol

  /**
   * Create a TokenAmount.
   * @param {BigInt|string|number} amount   The amount as an integer (e.g. in Wei for Ethers).
   * @param {BigInt|string|number} decimals The token decimals (e.g. 18 for Ethers).
   * @param {string} options.symbol         The token symbol (e.g. ETH for Ethers).
   */
  constructor(amount, decimals, { symbol = '' } = {}) {
    this.#amount = JSBI.BigInt(amount)
    this.#decimals = JSBI.BigInt(decimals)
    this.#symbol = symbol
  }

  /**
   * Get the amount as an integer (e.g. in Wei for Ethers).
   * @returns {BigInt}
   */
  amount() {
    return BigInt(this.#amount.toString())
  }

  /**
   * Get the amount as an integer (e.g. in Wei for Ethers).
   * @returns {string}
   */
  amountString() {
    return this.#amount.toString()
  }

  /**
   * Get the decimals of the token.
   * @returns {number}
   */
  decimals() {
    return this.#decimals.toNumber()
  }

  /**
   * Formats the token amount for display purposes.
   * @param {string} options.displaySign     Whether to display the sign or not.
   * @param {string} options.displaySymbol   Whether to display the token symbol or not.
   * @param {string} options.digits          The number of digits to appear after the decimal point.
   * @returns {string}
   */
  format({ sign = false, symbol = false, digits = 2 } = {}) {
    return formatTokenAmount(this.#amount, this.#decimals, digits, {
      sign,
      symbol: symbol ? this.#symbol : '',
    })
  }

  /**
   * Returns an object to be serialized by JSON.stringify().
   * @returns {object}
   */
  toJSON() {
    return {
      amount: this.#amount.toString(),
      decimals: this.#decimals.toString(),
      symbol: this.#symbol,
    }
  }

  /**
   * Instanciate a new TokenAmount from the data serialized by JSON.stringify().
   * @returns {object}
   */
  static fromJSON(jsonData) {
    try {
      const { amount, decimals, symbol } = JSON.parse(jsonData)
      if (amount === undefined || decimals === undefined) {
        throw new Error()
      }
      return new TokenAmount(amount, decimals, { symbol })
    } catch (err) {
      throw new Error(
        'The data passed to TokenAmount.fromJSON() seems incorrect or incomplete.'
      )
    }
  }
}

export default TokenAmount
