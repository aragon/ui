import JSBI from '../../node_modules/jsbi/dist/jsbi.mjs.js';
import { NO_BREAK_SPACE } from './characters.js';
import { divideRoundBigInt } from './math.js';

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
  amount = JSBI.BigInt(String(amount));
  decimals = JSBI.BigInt(String(decimals));
  digits = JSBI.BigInt(String(digits));

  const _0 = JSBI.BigInt(0);

  const _10 = JSBI.BigInt(10);

  if (JSBI.lessThan(decimals, _0)) {
    throw new Error('formatTokenAmount(): decimals cannot be negative');
  }

  if (JSBI.lessThan(digits, _0)) {
    throw new Error('formatTokenAmount(): digits cannot be negative');
  }

  if (JSBI.lessThan(decimals, digits)) {
    digits = decimals;
  }

  const negative = JSBI.lessThan(amount, _0);

  if (negative) {
    amount = JSBI.unaryMinus(amount);
  }

  const amountConverted = JSBI.equal(decimals, _0) ? amount : JSBI.BigInt(divideRoundBigInt(amount, JSBI.exponentiate(_10, JSBI.subtract(decimals, digits))));
  const leftPart = formatNumber(JSBI.divide(amountConverted, JSBI.exponentiate(_10, digits)));
  const rightPart = String(JSBI.remainder(amountConverted, JSBI.exponentiate(_10, digits))).padStart(digits, '0').replace(/0+$/, '');
  return [displaySign ? negative ? '-' : '+' : '', leftPart, rightPart ? `.${rightPart}` : '', symbol ? `${NO_BREAK_SPACE}${symbol}` : ''].join('');
}

export { formatIntegerRange, formatNumber, formatTokenAmount };
//# sourceMappingURL=format.js.map
