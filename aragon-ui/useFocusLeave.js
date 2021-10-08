'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useFocusLeave(cb, _ref) {
  var fallbackRef = React.useRef();
  var ref = _ref || fallbackRef;
  var handleFocusLeave = React.useCallback(function (event) {
    var _ref$current;

    if (!(ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains(event.relatedTarget))) {
      cb(event);
    }
  }, [ref, cb]);
  return {
    ref: ref,
    handleFocusLeave: handleFocusLeave
  };
}

exports.useFocusLeave = useFocusLeave;
//# sourceMappingURL=useFocusLeave.js.map
