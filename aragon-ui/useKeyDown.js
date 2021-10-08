'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useKeyDown(key, callback) {
  var keys = React.useMemo(function () {
    return Array.isArray(key) ? key : [key];
  }, [key]);
  var handleKeyDown = React.useCallback(function (event) {
    if (keys.includes(event.keyCode)) {
      callback(event.keyCode, event);
    }
  }, [callback, keys]);
  React.useEffect(function () {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}

exports.useKeyDown = useKeyDown;
//# sourceMappingURL=useKeyDown.js.map
