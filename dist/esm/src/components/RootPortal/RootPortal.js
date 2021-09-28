import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import ReactDOM from 'react-dom';
import { Root } from '../../providers/Root/Root.js';

const RootPortal = props => /*#__PURE__*/React.createElement(Root, null, rootElement => {
  if (!rootElement) {
    throw new Error('<RootPortal> needs to be nested in <Root.Provider>. Have you declared <Main>?');
  }

  return /*#__PURE__*/ReactDOM.createPortal(props.children, rootElement);
});

RootPortal.propTypes = {
  children: PropTypes.node.isRequired
};

export { RootPortal as default };
//# sourceMappingURL=RootPortal.js.map
