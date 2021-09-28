'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

/* eslint-disable react-hooks/rules-of-hooks */

function useClickOutside(cb, ref = React.useRef()) {
  /* eslint-enable react-hooks/rules-of-hooks */
  const handleClick = React.useCallback(e => {
    if (!ref.current.contains(e.target)) {
      cb();
    }
  }, [cb, ref]);
  React.useEffect(() => {
    document.addEventListener('click', handleClick, true);
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick]);
  return {
    ref
  };
}

exports.useClickOutside = useClickOutside;
//# sourceMappingURL=useClickOutside.js.map
