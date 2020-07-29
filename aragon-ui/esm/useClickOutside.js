import { useRef, useCallback, useEffect } from 'react';

/* eslint-disable react-hooks/rules-of-hooks */

function useClickOutside(cb) {
  var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : useRef();

  /* eslint-enable react-hooks/rules-of-hooks */
  var handleClick = useCallback(function (e) {
    if (!ref.current.contains(e.target)) {
      cb();
    }
  }, [cb, ref]);
  useEffect(function () {
    document.addEventListener('click', handleClick, true);
    return function () {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick]);
  return {
    ref: ref
  };
}

export { useClickOutside };
//# sourceMappingURL=useClickOutside.js.map
