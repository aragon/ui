import { useRef, useCallback } from 'react';

function useFocusEnter(cb, _ref) {
  var fallbackRef = useRef();
  var ref = _ref || fallbackRef;
  var handleFocusEnter = useCallback(function (event) {
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

export { useFocusEnter };
//# sourceMappingURL=useFocusEnter.js.map
