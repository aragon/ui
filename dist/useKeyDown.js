'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function useKeyDown(key, callback) {
  const keys = React.useMemo(() => Array.isArray(key) ? key : [key], [key]);
  const handleKeyDown = React.useCallback(event => {
    if (keys.includes(event.keyCode)) {
      callback(event.keyCode, event);
    }
  }, [callback, keys]);
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
}

exports.useKeyDown = useKeyDown;
//# sourceMappingURL=useKeyDown.js.map
