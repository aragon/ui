'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function useFocusEnter(cb, _ref) {
  var fallbackRef = React.useRef();
  var ref = _ref || fallbackRef;
  var handleFocusEnter = React.useCallback(function (event) {
    var _ref$current;

    if (ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.contains(event.target)) {
      cb(event);
    }
  }, [cb, ref]);
  return {
    ref: ref,
    handleFocusEnter: handleFocusEnter
  };
}

exports.useFocusEnter = useFocusEnter;
//# sourceMappingURL=useFocusEnter.js.map
