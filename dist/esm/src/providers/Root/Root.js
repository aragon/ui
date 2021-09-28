import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React, { useContext, useState, useCallback } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';

const RootContext = /*#__PURE__*/React.createContext(null);

function RootProvider({
  children,
  ...props
}) {
  const [element, setElement] = useState(null);
  const handleRef = useCallback(element => {
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

const useRoot = () => useContext(RootContext);

export { Root, Root as default, useRoot };
//# sourceMappingURL=Root.js.map
