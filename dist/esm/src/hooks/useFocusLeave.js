import { useRef, useCallback } from 'react';

function useFocusLeave(cb, _ref) {
  const fallbackRef = useRef();
  const ref = _ref || fallbackRef;
  const handleFocusLeave = useCallback(event => {
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

export { useFocusLeave };
//# sourceMappingURL=useFocusLeave.js.map
