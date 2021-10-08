import slicedToArray from '../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React, { useState, useMemo, useContext, useEffect } from 'react';

function initContainsComponent() {
  var ContainsContext = /*#__PURE__*/React.createContext({
    contains: false
  });
  return {
    // Wrap the parent component with this provider.

    /* eslint-disable react/prop-types */
    Provider: function Provider(_ref) {
      var children = _ref.children;

      var _useState = useState(0),
          _useState2 = slicedToArray(_useState, 2),
          count = _useState2[0],
          setCount = _useState2[1];

      var contextValue = useMemo(function () {
        return {
          updateCount: function updateCount(diff) {
            setCount(function (count) {
              return count + diff;
            });
          },
          contains: count > 0
        };
      }, [count]);
      return /*#__PURE__*/React.createElement(ContainsContext.Provider, {
        value: contextValue
      }, children);
    },

    /* eslint-enable react/prop-types */
    // Call this from the parent component (returns a boolean)
    useContains: function useContains() {
      return useContext(ContainsContext).contains;
    },
    // Call this from the child component
    useRegister: function useRegister() {
      var _useContext = useContext(ContainsContext),
          updateCount = _useContext.updateCount;

      useEffect(function () {
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

export { initContainsComponent };
//# sourceMappingURL=contains-component.js.map
