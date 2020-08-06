import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import ReactDOM$1 from 'react-dom';
import { Root as Root$1 } from '../../providers/Root/Root.js';

var RootPortal = function RootPortal(props) {
  return /*#__PURE__*/React$1.createElement(Root$1, null, function (rootElement) {
    if (!rootElement) {
      throw new Error('<RootPortal> needs to be nested in <Root.Provider>. Have you declared <Main>?');
    }

    return /*#__PURE__*/ReactDOM$1.createPortal(props.children, rootElement);
  });
};

RootPortal.propTypes = {
  children: propTypes.node.isRequired
};

export default RootPortal;
//# sourceMappingURL=RootPortal.js.map
