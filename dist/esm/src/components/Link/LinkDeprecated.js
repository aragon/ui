import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import React from 'react';
import Link from './Link.js';
import { warnOnce } from '../../utils/environment.js';

function ExternalLink(props) {
  warnOnce('ExternalLink', 'ExternalLink is deprecated. Please use Link instead.');
  return /*#__PURE__*/React.createElement(Link, _extends({
    external: true
  }, props));
}

function SafeLink(props) {
  warnOnce('SafeLink', 'SafeLink is deprecated. Please use Link instead.');
  return /*#__PURE__*/React.createElement(Link, props);
}

export { ExternalLink, SafeLink };
//# sourceMappingURL=LinkDeprecated.js.map
