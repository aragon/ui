import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import ReactDOM from 'react-dom';
import { Root } from '../../providers/Root/Root.js';

var RootPortal = function RootPortal(props) {
  return /*#__PURE__*/React.createElement(Root, null, function (rootElement) {
    if (!rootElement) {
      throw new Error('<RootPortal> needs to be nested in <Root.Provider>. Have you declared <Main>?');
    }

    return /*#__PURE__*/ReactDOM.createPortal(props.children, rootElement);
  });
};

RootPortal.propTypes = {
  children: propTypes.node.isRequired
};

export default RootPortal;
//# sourceMappingURL=RootPortal.js.map
