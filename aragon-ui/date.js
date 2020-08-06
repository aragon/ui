'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./_commonjsHelpers-1b94f6bc.js');
var dayjs_min = require('./dayjs.min-ac79806e.js');

var UNITS = [['years', 'year'], ['months', 'month'], ['days', 'day'], ['hours', 'hour'], ['minutes', 'minute'], ['seconds', 'second']];
var DEFAULT_UNITS = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']; // Return the difference between two dates, per unit.
// Set `units` to get specific units only, e.g. ['minutes', 'seconds']
// If `units` is not set, all the units are enabled.

var difference = function difference(date1, date2) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var units = options.units || DEFAULT_UNITS;
  var maxUnits = options.maxUnits || -1;
  var keepLeadingZeros = maxUnits === -1 && options.keepLeadingZeros || false;
  var start = date2 > date1 ? date1 : date2;

  var getRightMostUnitIndex = function getRightMostUnitIndex() {
    return [].concat(UNITS).reverse().find(function (_ref) {
      var _ref2 = slicedToArray.slicedToArray(_ref, 1),
          unit = _ref2[0];

      return units.includes(unit);
    })[0];
  };

  return UNITS.reduce(function (result, _ref3, index) {
    var _ref4 = slicedToArray.slicedToArray(_ref3, 2),
        name = _ref4[0],
        unitName = _ref4[1];

    result[name] = null; // fill the current unit, subtract the difference from the remaining

    if ((maxUnits === -1 || result.remainingUnits > 0) && units.includes(name)) {
      result[name] = result.remaining.diff(start, unitName);
      result.remaining = result.remaining.subtract(result[name], unitName);
    } // remove leading zeros


    if (!keepLeadingZeros && !result.seenNonZero) {
      if (result[name] === 0) {
        result[name] = null;
      } else {
        result.seenNonZero = true;
      }
    } // enforce the maxUnits option


    if (result.remainingUnits > 0 && result.seenNonZero) {
      result.remainingUnits -= 1;
    } // last iteration


    if (index === UNITS.length - 1) {
      delete result.remaining;
      delete result.remainingUnits;
      delete result.seenNonZero; // include at least one 0

      if (Object.values(result).every(function (val) {
        return val === null;
      })) {
        result[getRightMostUnitIndex()] = 0;
      }
    }

    return result;
  }, {
    remaining: dayjs_min.dayjs_min(start === date1 ? date2 : date1),
    remainingUnits: maxUnits,
    seenNonZero: false
  });
};
var eachDayOfInterval = function eachDayOfInterval() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      start = _ref5.start,
      end = _ref5.end;

  var startDate = dayjs_min.dayjs_min(start);
  var endDate = dayjs_min.dayjs_min(end);

  if (!startDate.isValid()) {
    throw new Error('Start date of interval is invalid');
  }

  if (!endDate.isValid()) {
    throw new Error('End date of interval is invalid');
  }

  startDate = startDate.startOf('day');
  endDate = endDate.startOf('day');

  if (startDate.isAfter(endDate)) {
    throw new Error('Start date of interval is after end date');
  }

  var interval = [];

  while (!startDate.isAfter(endDate)) {
    interval.push(startDate.toDate());
    startDate = startDate.add(1, 'day');
  }

  return interval;
};
var formatHtmlDatetime = function formatHtmlDatetime(date) {
  return dayjs_min.dayjs_min(date).toISOString();
};

exports.difference = difference;
exports.eachDayOfInterval = eachDayOfInterval;
exports.formatHtmlDatetime = formatHtmlDatetime;
//# sourceMappingURL=date.js.map
