import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import { _ as _toConsumableArray } from './toConsumableArray-127424c2.js';
import { J as JSBI, d as divideRoundBigInt } from './math-e6d0e93a.js';
import { NO_BREAK_SPACE } from './characters.js';

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

function formatIntegerRange() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 99;
  var maxSuffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  value = parseInt(value, 10);

  if (value <= min) {
    return "".concat(parseInt(min, 10));
  }

  if (value > max) {
    return "".concat(parseInt(max, 10)).concat(maxSuffix);
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
  var numAsString = String(number);

  var _numAsString$split = numAsString.split('.'),
      _numAsString$split2 = _slicedToArray(_numAsString$split, 2),
      integer = _numAsString$split2[0],
      decimals = _numAsString$split2[1];

  return _toConsumableArray(integer).reverse().reduce(function (result, digit, index) {
    return digit + (index > 0 && index % 3 === 0 ? ',' : '') + result;
  }, decimals ? ".".concat(decimals) : '');
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

function formatTokenAmount(amount, decimals) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$digits = _ref.digits,
      digits = _ref$digits === void 0 ? 2 : _ref$digits,
      _ref$symbol = _ref.symbol,
      symbol = _ref$symbol === void 0 ? '' : _ref$symbol,
      _ref$displaySign = _ref.displaySign,
      displaySign = _ref$displaySign === void 0 ? false : _ref$displaySign;

  amount = JSBI.BigInt(String(amount));
  decimals = JSBI.BigInt(String(decimals));
  digits = JSBI.BigInt(String(digits));

  var _0 = JSBI.BigInt(0);

  var _10 = JSBI.BigInt(10);

  if (JSBI.lessThan(decimals, _0)) {
    throw new Error('formatTokenAmount(): decimals cannot be negative');
  }

  if (JSBI.lessThan(digits, _0)) {
    throw new Error('formatTokenAmount(): digits cannot be negative');
  }

  if (JSBI.lessThan(decimals, digits)) {
    digits = decimals;
  }

  var negative = JSBI.lessThan(amount, _0);

  if (negative) {
    amount = JSBI.unaryMinus(amount);
  }

  var amountConverted = JSBI.equal(decimals, _0) ? amount : JSBI.BigInt(divideRoundBigInt(amount, JSBI.exponentiate(_10, JSBI.subtract(decimals, digits))));
  var leftPart = formatNumber(JSBI.divide(amountConverted, JSBI.exponentiate(_10, digits)));
  var rightPart = String(JSBI.remainder(amountConverted, JSBI.exponentiate(_10, digits))).padStart(digits, '0').replace(/0+$/, '');
  return [displaySign ? negative ? '-' : '+' : '', leftPart, rightPart ? ".".concat(rightPart) : '', symbol ? "".concat(NO_BREAK_SPACE).concat(symbol) : ''].join('');
}

export { formatIntegerRange, formatNumber, formatTokenAmount };
//# sourceMappingURL=format.js.map
