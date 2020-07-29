'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);

var A_DAY = 1000 * 60 * 60 * 24;

function cachedMap() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$expireAfter = _ref.expireAfter,
      expireAfter = _ref$expireAfter === void 0 ? A_DAY : _ref$expireAfter,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 100 : _ref$size;

  var cache = new Map(); // Delete the first (oldest) entry if we are above `size`. `cache.size`
  // should never be greater than `size + 1`, so no need for a loop here.

  function trim() {
    if (cache.size > size) {
      cache.delete(cache.keys().next().value);
    }
  } // We are using delete() then set() to reset the position everytime the
  // access is refreshed. That way, the oldest entry is always at the first
  // position and we don’t need to iterate over the entire cache to find it.


  function update(key, value, lastAccess) {
    cache.delete(key);
    cache.set(key, {
      value: value,
      lastAccess: lastAccess
    });
    trim();
  }

  function get(key) {
    var now = new Date();
    var cachedEntry = cache.get(key);

    if (!cachedEntry) {
      return null;
    } // Expired: delete the entry


    if (now - cachedEntry.lastAccess > expireAfter) {
      cache.delete(key);
      return null;
    }

    update(key, cachedEntry.value, now);
    return cachedEntry.value;
  }

  function set(key, value) {
    update(key, value, new Date());
  }

  return {
    clear: function clear() {
      return cache.clear();
    },
    delete: function _delete(key) {
      return cache.delete(key);
    },
    get: get,
    set: set
  };
}

var srcCache = cachedMap(); // Check if a remote image exists and can be loaded within a specific amount of time.

function useImageExists(src) {
  var timeUntilFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

  var _useState = React.useState(false),
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
      exists = _useState2[0],
      setExists = _useState2[1];

  var _useState3 = React.useState(true),
      _useState4 = slicedToArray._slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = slicedToArray._slicedToArray(_useState5, 2),
      displayFallback = _useState6[0],
      setDisplayFallback = _useState6[1];

  React.useEffect(function () {
    var image = new Image();
    var fallbackTimer = setTimeout(function () {
      return setDisplayFallback(true);
    }, timeUntilFallback);

    var init = function init() {
      if (!src) {
        setExists(false);
        setLoading(false);
        return;
      }

      if (srcCache.get(src)) {
        success();
        return;
      }

      setExists(false);
      setLoading(true); // TODO: ensure only one image is loading at a time for a given src.

      image.addEventListener('load', success);
      image.src = src;
    };

    var success = function success() {
      setLoading(false);
      setExists(true);
      srcCache.set(src, true);
      done();
    };

    var done = function done() {
      clearTimeout(fallbackTimer);

      if (image) {
        image.removeEventListener('load', success);
        image = null;
      }
    };

    init();
    return done;
  }, [src, timeUntilFallback]);
  return React.useMemo(function () {
    return {
      src: src,
      displayFallback: displayFallback,
      exists: exists,
      loading: loading
    };
  }, [src, displayFallback, exists, loading]);
} // render prop

var ImageExists = function ImageExists(_ref) {
  var timeUntilFallback = _ref.timeUntilFallback,
      src = _ref.src,
      children = _ref.children;
  return children(useImageExists(src, timeUntilFallback));
};

exports.ImageExists = ImageExists;
exports.useImageExists = useImageExists;
//# sourceMappingURL=useImageExists.js.map
