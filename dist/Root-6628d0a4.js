'use strict';

var _extends = require('./extends-5150c1f4.js');
var React = require('react');
var index = require('./index-19b0c963.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const RootContext = /*#__PURE__*/React__default["default"].createContext(null);

function RootProvider({
  children,
  ...props
}) {
  const [element, setElement] = React.useState(null);
  const handleRef = React.useCallback(element => {
    if (element !== null) {
      setElement(element);
    }
  }, []);
  return /*#__PURE__*/React__default["default"].createElement(RootContext.Provider, {
    value: element
  }, /*#__PURE__*/React__default["default"].createElement("div", _extends._extends({
    ref: handleRef
  }, props),
  /*
     We don’t render the children tree until the element is present, at
     the second rendering.
      The reason why it is needed is because element references are
     assigned after the first rendering, and we don’t want to let
     `<Root />` consumers having to deal with the reference being `null`
     at the first rendering.
      This way, we can guarantee that if a consumer gets `null` rather
     than the element, it’s because <Root.Provider /> has to be defined
     at an upper level.
   */
  element ? children : null));
}

RootProvider.propTypes = {
  children: index.PropTypes.node
};

function Root(props) {
  return /*#__PURE__*/React__default["default"].createElement(RootContext.Consumer, props);
}

Root.Provider = RootProvider;

const useRoot = () => React.useContext(RootContext);

exports.Root = Root;
exports.useRoot = useRoot;
//# sourceMappingURL=Root-6628d0a4.js.map
