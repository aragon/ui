'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var math = require('./math-9a584d24.js');
var characters = require('./characters.js');

/**
 * Formats an integer based on a limited range.
 *
 * Example:
 *   formatIntegerRange(234, 0, 99, '+') === "99+"
 *
 * @param {number} value     The number to format.
 * @param {number} min       Range minimum.
 * @param {number} max       Range maximum.
 * @param {number} maxSuffix Suffix to add if the value exceeds the max.
 */

function formatIntegerRange(value = -1, min = 0, max = 99, maxSuffix = '') {
  value = parseInt(value, 10);

  if (value <= min) {
    return `${parseInt(min, 10)}`;
  }

  if (value > max) {
    return `${parseInt(max, 10)}${maxSuffix}`;
  }

  return String(value);
}
/**
 * Formats a number for display purposes.
 *
 * This function is not using Intl.NumberFormat() to be compatible with big
 * integers expressed as string, or BigInt-like objects.
 *
 * @param {BigInt|string|number} number Number to convert
 * @returns {string}
 */

function formatNumber(number) {
  const numAsString = String(number);
  const [integer, decimals] = numAsString.split('.');
  return [...integer].reverse().reduce((result, digit, index) => {
    return digit + (index > 0 && index % 3 === 0 ? ',' : '') + result;
  }, decimals ? `.${decimals}` : '');
}
/**
 * Formats a token amount for display purposes.
 *
 * @param {BigInt|string|number} amount              Number to round
 * @param {BigInt|string|number} decimals            Decimal placement for amount
 * @param {BigInt|string|number} digits              Rounds the number to a given decimal place
 * @param {boolean}              options.displaySign Decides if the sign should be displayed
 * @param {string}               options.symbol      Symbol for the token amount
 * @returns {string}
 */

function formatTokenAmount(amount, decimals, {
  digits = 2,
  symbol = '',
  displaySign = false
} = {}) {
  amount = math.JSBI.BigInt(String(amount));
  decimals = math.JSBI.BigInt(String(decimals));
  digits = math.JSBI.BigInt(String(digits));

  const _0 = math.JSBI.BigInt(0);

  const _10 = math.JSBI.BigInt(10);

  if (math.JSBI.lessThan(decimals, _0)) {
    throw new Error('formatTokenAmount(): decimals cannot be negative');
  }

  if (math.JSBI.lessThan(digits, _0)) {
    throw new Error('formatTokenAmount(): digits cannot be negative');
  }

  if (math.JSBI.lessThan(decimals, digits)) {
    digits = decimals;
  }

  const negative = math.JSBI.lessThan(amount, _0);

  if (negative) {
    amount = math.JSBI.unaryMinus(amount);
  }

  const amountConverted = math.JSBI.equal(decimals, _0) ? amount : math.JSBI.BigInt(math.divideRoundBigInt(amount, math.JSBI.exponentiate(_10, math.JSBI.subtract(decimals, digits))));
  const leftPart = formatNumber(math.JSBI.divide(amountConverted, math.JSBI.exponentiate(_10, digits)));
  const rightPart = String(math.JSBI.remainder(amountConverted, math.JSBI.exponentiate(_10, digits))).padStart(digits, '0').replace(/0+$/, '');
  return [displaySign ? negative ? '-' : '+' : '', leftPart, rightPart ? `.${rightPart}` : '', symbol ? `${characters.NO_BREAK_SPACE}${symbol}` : ''].join('');
}

exports.formatIntegerRange = formatIntegerRange;
exports.formatNumber = formatNumber;
exports.formatTokenAmount = formatTokenAmount;
//# sourceMappingURL=format.js.map
