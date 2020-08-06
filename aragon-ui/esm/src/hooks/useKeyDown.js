import { useMemo, useCallback, useEffect } from 'react';

function useKeyDown(key, callback) {
  var keys = useMemo(function () {
    return Array.isArray(key) ? key : [key];
  }, [key]);
  var handleKeyDown = useCallback(function (event) {
    if (keys.includes(event.keyCode)) {
      callback(event.keyCode, event);
    }
  }, [callback, keys]);
  useEffect(function () {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('keydown', handleKeyDown);
    return function () {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}

export { useKeyDown };
//# sourceMappingURL=useKeyDown.js.map
