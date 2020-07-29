'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var slicedToArray = require('./slicedToArray-0711941d.js');
var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-b0606964.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');

var RootContext = React__default.createContext(null);

function RootProvider(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["children"]);

  var _useState = React.useState(null),
      _useState2 = slicedToArray._slicedToArray(_useState, 2),
      element = _useState2[0],
      setElement = _useState2[1];

  var handleRef = React.useCallback(function (element) {
    if (element !== null) {
      setElement(element);
    }
  }, []);
  return /*#__PURE__*/React__default.createElement(RootContext.Provider, {
    value: element
  }, /*#__PURE__*/React__default.createElement("div", _extends._extends({
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
  return /*#__PURE__*/React__default.createElement(RootContext.Consumer, props);
}

Root.Provider = RootProvider;

var useRoot = function useRoot() {
  return React.useContext(RootContext);
};

exports.Root = Root;
exports.useRoot = useRoot;
//# sourceMappingURL=index-0db71dc1.js.map
