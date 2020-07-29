import { useRef, useCallback } from 'react';

function useFocusLeave(cb, _ref) {
  var fallbackRef = useRef();
  var ref = _ref || fallbackRef;
  var handleFocusLeave = useCallback(function (event) {
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

export { useFocusLeave };
//# sourceMappingURL=useFocusLeave.js.map
