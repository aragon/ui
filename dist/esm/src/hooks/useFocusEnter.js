import { useRef, useCallback } from 'react';

function useFocusEnter(cb, _ref) {
  const fallbackRef = useRef();
  const ref = _ref || fallbackRef;
  const handleFocusEnter = useCallback(event => {
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

export { useFocusEnter };
//# sourceMappingURL=useFocusEnter.js.map
