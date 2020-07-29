import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './extends-db4f0c26.js';
import './objectWithoutProperties-234758e1.js';
import ReactDOM from 'react-dom';
import { R as Root } from './index-f754c2df.js';

var RootPortal = function RootPortal(props) {
  return /*#__PURE__*/React.createElement(Root, null, function (rootElement) {
    if (!rootElement) {
      throw new Error('<RootPortal> needs to be nested in <Root.Provider>. Have you declared <Main>?');
    }

    return ReactDOM.createPortal(props.children, rootElement);
  });
};

RootPortal.propTypes = {
  children: PropTypes.node.isRequired
};

export default RootPortal;
//# sourceMappingURL=RootPortal.js.map
