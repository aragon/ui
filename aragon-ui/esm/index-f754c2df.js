import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import React, { useContext, useState, useCallback } from 'react';
import { P as PropTypes } from './index-097535f1.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';

var RootContext = React.createContext(null);

function RootProvider(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      element = _useState2[0],
      setElement = _useState2[1];

  var handleRef = useCallback(function (element) {
    if (element !== null) {
      setElement(element);
    }
  }, []);
  return /*#__PURE__*/React.createElement(RootContext.Provider, {
    value: element
  }, /*#__PURE__*/React.createElement("div", _extends({
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
  children: PropTypes.node
};

function Root(props) {
  return /*#__PURE__*/React.createElement(RootContext.Consumer, props);
}

Root.Provider = RootProvider;

var useRoot = function useRoot() {
  return useContext(RootContext);
};

export { Root as R, useRoot as u };
//# sourceMappingURL=index-f754c2df.js.map
