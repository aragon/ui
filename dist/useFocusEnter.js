'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useFocusEnter(cb, _ref) {
  const fallbackRef = React.useRef();
  const ref = _ref || fallbackRef;
  const handleFocusEnter = React.useCallback(event => {
    var _ref$current;

    if (ref !== null && ref !== void 0 && (_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(event.target)) {
      cb(event);
    }
  }, [cb, ref]);
  return {
    ref,
    handleFocusEnter
  };
}

exports.useFocusEnter = useFocusEnter;
//# sourceMappingURL=useFocusEnter.js.map
