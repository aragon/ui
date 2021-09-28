'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function initContainsComponent() {
  const ContainsContext = /*#__PURE__*/React__default["default"].createContext({
    contains: false
  });
  return {
    // Wrap the parent component with this provider.

    /* eslint-disable react/prop-types */
    Provider({
      children
    }) {
      const [count, setCount] = React.useState(0);
      const contextValue = React.useMemo(() => {
        return {
          updateCount(diff) {
            setCount(count => count + diff);
          },

          contains: count > 0
        };
      }, [count]);
      return /*#__PURE__*/React__default["default"].createElement(ContainsContext.Provider, {
        value: contextValue
      }, children);
    },

    /* eslint-enable react/prop-types */
    // Call this from the parent component (returns a boolean)
    useContains() {
      return React.useContext(ContainsContext).contains;
    },

    // Call this from the child component
    useRegister() {
      const {
        updateCount
      } = React.useContext(ContainsContext);
      React.useEffect(() => {
        if (!updateCount) {
          return;
        }

        updateCount(1);
        return () => {
          updateCount(-1);
        }; // We don't want this effect to ever re-run
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    }

  };
}

exports.initContainsComponent = initContainsComponent;
//# sourceMappingURL=contains-component.js.map
