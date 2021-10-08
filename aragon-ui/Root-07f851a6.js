'use strict';

var _extends = require('./extends-023d783e.js');
var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var React = require('react');
var index = require('./index-37353731.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var RootContext = /*#__PURE__*/React__default['default'].createContext(null);

function RootProvider(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["children"]);

  var _useState = React.useState(null),
      _useState2 = slicedToArray.slicedToArray(_useState, 2),
      element = _useState2[0],
      setElement = _useState2[1];

  var handleRef = React.useCallback(function (element) {
    if (element !== null) {
      setElement(element);
    }
  }, []);
  return /*#__PURE__*/React__default['default'].createElement(RootContext.Provider, {
    value: element
  }, /*#__PURE__*/React__default['default'].createElement("div", _extends._extends_1({
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
  children: index.propTypes.node
};

function Root(props) {
  return /*#__PURE__*/React__default['default'].createElement(RootContext.Consumer, props);
}

Root.Provider = RootProvider;

var useRoot = function useRoot() {
  return React.useContext(RootContext);
};

exports.Root = Root;
exports.useRoot = useRoot;
//# sourceMappingURL=Root-07f851a6.js.map
