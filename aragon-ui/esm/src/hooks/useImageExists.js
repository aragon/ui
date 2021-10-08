import slicedToArray from '../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import { useState, useEffect, useMemo } from 'react';
import cachedMap from '../lib/cached-map.js';

var srcCache = cachedMap(); // Check if a remote image exists and can be loaded within a specific amount of time.

function useImageExists(src) {
  var timeUntilFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      exists = _useState2[0],
      setExists = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = slicedToArray(_useState5, 2),
      displayFallback = _useState6[0],
      setDisplayFallback = _useState6[1];

  useEffect(function () {
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
  return useMemo(function () {
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

export { ImageExists, useImageExists };
//# sourceMappingURL=useImageExists.js.map
