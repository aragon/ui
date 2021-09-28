'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useFocusLeave(cb, _ref) {
  const fallbackRef = React.useRef();
  const ref = _ref || fallbackRef;
  const handleFocusLeave = React.useCallback(event => {
    var _ref$current;

    if (!(ref !== null && ref !== void 0 && (_ref$current = ref.current) !== null && _ref$current !== void 0 && _ref$current.contains(event.relatedTarget))) {
      cb(event);
    }
  }, [ref, cb]);
  return {
    ref,
    handleFocusLeave
  };
}

exports.useFocusLeave = useFocusLeave;
//# sourceMappingURL=useFocusLeave.js.map
