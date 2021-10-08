import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React, { useContext, useState, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';

var RootContext = /*#__PURE__*/React.createContext(null);

function RootProvider(_ref) {
  var children = _ref.children,
      props = objectWithoutProperties(_ref, ["children"]);

  var _useState = useState(null),
      _useState2 = slicedToArray(_useState, 2),
      element = _useState2[0],
      setElement = _useState2[1];

  var handleRef = useCallback(function (element) {
    if (element !== null) {
      setElement(element);
    }
  }, []);
  return /*#__PURE__*/React.createElement(RootContext.Provider, {
    value: element
  }, /*#__PURE__*/React.createElement("div", _extends_1({
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
  children: propTypes.node
};

function Root(props) {
  return /*#__PURE__*/React.createElement(RootContext.Consumer, props);
}

Root.Provider = RootProvider;

var useRoot = function useRoot() {
  return useContext(RootContext);
};

export default Root;
export { Root, useRoot };
//# sourceMappingURL=Root.js.map
