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

export default cachedMap;
//# sourceMappingURL=cached-map.js.map
