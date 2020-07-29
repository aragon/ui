'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);

function initContainsComponent() {
  var ContainsContext = React__default.createContext({
    contains: false
  });
  return {
    // Wrap the parent component with this provider.

    /* eslint-disable react/prop-types */
    Provider: function Provider(_ref) {
      var children = _ref.children;

      var _useState = React.useState(0),
          _useState2 = slicedToArray._slicedToArray(_useState, 2),
          count = _useState2[0],
          setCount = _useState2[1];

      var contextValue = React.useMemo(function () {
        return {
          updateCount: function updateCount(diff) {
            setCount(function (count) {
              return count + diff;
            });
          },
          contains: count > 0
        };
      }, [count]);
      return /*#__PURE__*/React__default.createElement(ContainsContext.Provider, {
        value: contextValue
      }, children);
    },

    /* eslint-enable react/prop-types */
    // Call this from the parent component (returns a boolean)
    useContains: function useContains() {
      return React.useContext(ContainsContext).contains;
    },
    // Call this from the child component
    useRegister: function useRegister() {
      var _useContext = React.useContext(ContainsContext),
          updateCount = _useContext.updateCount;

      React.useEffect(function () {
        if (!updateCount) {
          return;
        }

        updateCount(1);
        return function () {
          updateCount(-1);
        }; // We don't want this effect to ever re-run
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    }
  };
}

exports.initContainsComponent = initContainsComponent;
//# sourceMappingURL=contains-component.js.map
