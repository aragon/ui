'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var defineProperty = require('./defineProperty-fdbd3c46.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-19b0c963.js');
var isObject = require('./isObject-f0a96713.js');
var dayjs_min = require('./dayjs.min-cee6ef8e.js');
var date = require('./date.js');
var Redraw = require('./Redraw-ed2990f7.js');
var IconClock = require('./IconClock.js');
var Theme = require('./Theme.js');
var textStyles = require('./text-styles.js');
var css = require('./css.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./getDisplayName-7f913e84.js');
require('./IconPropTypes-435c57cb.js');
require('./index-70e12149.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./font.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject.isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = isObject.baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = isObject.root['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$1(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$1;

var isFunction = isFunction_1;

var isMasked = _isMasked;

var toSource = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject.isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative;

var getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$1(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$1;

var getNative = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$1 = getNative(Object, 'create');

var _nativeCreate = nativeCreate$1;

var nativeCreate = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

var _hashHas = hashHas$1;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear;

var hashDelete = _hashDelete;

var hashGet = _hashGet;

var hashHas = _hashHas;

var hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq$1(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$1;

var eq = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$1(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$1;

var assocIndexOf = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear;

var listCacheDelete = _listCacheDelete;

var listCacheGet = _listCacheGet;

var listCacheHas = _listCacheHas;

var listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$1.prototype.clear = listCacheClear;
ListCache$1.prototype['delete'] = listCacheDelete;
ListCache$1.prototype.get = listCacheGet;
ListCache$1.prototype.has = listCacheHas;
ListCache$1.prototype.set = listCacheSet;

var _ListCache = ListCache$1;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(isObject.root, 'Map');

var _Map = Map$1;

var Hash = _Hash;

var ListCache = _ListCache;

var Map = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$1(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$1;

var getMapData = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear;

var mapCacheDelete = _mapCacheDelete;

var mapCacheGet = _mapCacheGet;

var mapCacheHas = _mapCacheHas;

var mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$1.prototype.clear = mapCacheClear;
MapCache$1.prototype['delete'] = mapCacheDelete;
MapCache$1.prototype.get = mapCacheGet;
MapCache$1.prototype.has = mapCacheHas;
MapCache$1.prototype.set = mapCacheSet;

var _MapCache = MapCache$1;

var MapCache = _MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

var memoize_1 = memoize;

var memoize$1 = memoize_1;

const RENDER_EVERY = 1000;

const formatUnit = v => String(v).padStart(2, '0');

const formats = {
  yMdhms: 'yMdhms',
  yMdhm: 'yMdhm',
  yMdh: 'yMdh',
  yMd: 'yMd',
  yM: 'yM',
  Mdhms: 'Mdhms',
  Mdhm: 'Mdhm',
  Mdh: 'Mdh',
  Md: 'Md',
  dhms: 'dhms',
  dhm: 'dhm',
  hms: 'hms',
  hm: 'hm',
  ms: 'ms',
  m: 'm',
  s: 's'
};
const unitNames = {
  y: 'years',
  M: 'months',
  d: 'days',
  h: 'hours',
  m: 'minutes',
  s: 'seconds'
};
const getFormat = memoize$1(format => ['y', 'M', 'd', 'h', 'm', 's'].reduce((units, symbol) => formats[format].includes(symbol) ? [...units, unitNames[symbol]] : units, []));

function getTime(start, end, format, showEmpty, maxUnits) {
  const date1 = end || new Date();
  const date2 = end ? new Date() : start;
  const totalInSeconds = dayjs_min.dayjs(date1).diff(date2, 'seconds');
  const {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  } = date.difference(date1, date2, {
    keepLeadingZeros: showEmpty,
    maxUnits,
    units: getFormat(format)
  });
  return {
    units: [['Y', years], ['M', months], ['D', days], ['H', hours], ['M', minutes], ['S', seconds]],
    totalInSeconds
  };
}

class Timer extends React__default["default"].Component {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "renderTime", () => {
      const {
        start,
        end,
        theme,
        format,
        showEmpty,
        maxUnits
      } = this.props;
      const {
        totalInSeconds,
        units
      } = getTime(start, end, format, showEmpty, maxUnits);

      if (totalInSeconds < 0 || Object.is(totalInSeconds, -0)) {
        return /*#__PURE__*/React__default["default"].createElement(_StyledSpan2, {
          $_css5: textStyles.textStyle('body2'),
          $_css6: theme.surfaceContentSecondary
        }, end ? 'Time out' : '−');
      }

      const lastUnitIndex = units.reduce((lastIndex, unit, index) => unit[1] === null ? lastIndex : index, 0);
      return /*#__PURE__*/React__default["default"].createElement("span", null, units.map((unit, index) => {
        const isLast = index === lastUnitIndex;
        const isSeconds = index === units.length - 1; // Only time units (hours, minutes and seconds).
        // Remember to update if ms gets added one day!

        const isTimeUnit = index >= units.length - 3;

        if (unit[1] === null) {
          return null;
        }

        return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, {
          key: index
        }, /*#__PURE__*/React__default["default"].createElement(_StyledSpan3, {
          $_css7: theme.surfaceContent,
          $_css8: isSeconds && // Fix the width of the seconds unit so that
          // it doesn’t jump too much.
          `
                      display: inline-flex;
                      align-items: baseline;
                      justify-content: space-between;
                      min-width: 31px;
                    `
        }, formatUnit(unit[1]), /*#__PURE__*/React__default["default"].createElement(_StyledSpan4, {
          $_css9: theme.surfaceContentSecondary
        }, unit[0])), !isLast &&
        /*#__PURE__*/
        // Separator
        React__default["default"].createElement(_StyledSpan5, {
          $_css10: theme.surfaceContentSecondary
        }, isTimeUnit && ':'));
      }));
    });
  }

  render() {
    const {
      end,
      start,
      showIcon,
      theme
    } = this.props;
    return /*#__PURE__*/React__default["default"].createElement(_StyledTime, {
      dateTime: date.formatHtmlDatetime(end || start),
      $_css: css.unselectable(),
      $_css2: textStyles.textStyle('body2')
    }, showIcon && /*#__PURE__*/React__default["default"].createElement(_StyledSpan, {
      $_css3: 0.5 * constants.GU
    }, /*#__PURE__*/React__default["default"].createElement(_StyledIconTime, {
      $_css4: theme.surfaceIcon
    })), /*#__PURE__*/React__default["default"].createElement(Redraw.Redraw, {
      interval: RENDER_EVERY
    }, this.renderTime));
  }

}

defineProperty._defineProperty(Timer, "propTypes", {
  end: index.PropTypes.instanceOf(Date),
  format: index.PropTypes.oneOf(Object.keys(formats)),
  maxUnits: index.PropTypes.number,
  showEmpty: index.PropTypes.bool,
  showIcon: index.PropTypes.bool,
  start: index.PropTypes.instanceOf(Date),
  theme: index.PropTypes.object
});

defineProperty._defineProperty(Timer, "defaultProps", {
  format: formats.yMdhms,
  maxUnits: -1,
  showEmpty: false,
  showIcon: true
});

var Timer$1 = (props => {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(Timer, _extends._extends({}, props, {
    theme: theme
  }));
});

var _StyledTime = _styled__default["default"]("time").withConfig({
  displayName: "Timer___StyledTime",
  componentId: "sc-58hkwl-0"
})(["display:flex;align-items:center;white-space:nowrap;", ";", ";"], p => p.$_css, p => p.$_css2);

var _StyledSpan = _styled__default["default"]("span").withConfig({
  displayName: "Timer___StyledSpan",
  componentId: "sc-58hkwl-1"
})(["display:flex;align-items:center;margin-right:", "px;margin-top:-3px;"], p => p.$_css3);

var _StyledIconTime = _styled__default["default"](IconClock["default"]).withConfig({
  displayName: "Timer___StyledIconTime",
  componentId: "sc-58hkwl-2"
})(["color:", ";"], p => p.$_css4);

var _StyledSpan2 = _styled__default["default"]("span").withConfig({
  displayName: "Timer___StyledSpan2",
  componentId: "sc-58hkwl-3"
})(["", ";color:", ";"], p => p.$_css5, p => p.$_css6);

var _StyledSpan3 = _styled__default["default"]("span").withConfig({
  displayName: "Timer___StyledSpan3",
  componentId: "sc-58hkwl-4"
})(["color:", ";", ";"], p => p.$_css7, p => p.$_css8);

var _StyledSpan4 = _styled__default["default"]("span").withConfig({
  displayName: "Timer___StyledSpan4",
  componentId: "sc-58hkwl-5"
})(["margin-left:2px;color:", ";"], p => p.$_css9);

var _StyledSpan5 = _styled__default["default"]("span").withConfig({
  displayName: "Timer___StyledSpan5",
  componentId: "sc-58hkwl-6"
})(["margin:0 4px;color:", ";font-weight:400;"], p => p.$_css10);

exports["default"] = Timer$1;
//# sourceMappingURL=Timer.js.map
