'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

/* eslint-disable react-hooks/rules-of-hooks */

function useClickOutside(cb) {
  var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : React.useRef();

  /* eslint-enable react-hooks/rules-of-hooks */
  var handleClick = React.useCallback(function (e) {
    if (!ref.current.contains(e.target)) {
      cb();
    }
  }, [cb, ref]);
  React.useEffect(function () {
    document.addEventListener('click', handleClick, true);
    return function () {
      document.removeEventListener('click', handleClick, true);
    };
  }, [handleClick]);
  return {
    ref: ref
  };
}

exports.useClickOutside = useClickOutside;
//# sourceMappingURL=useClickOutside.js.map
