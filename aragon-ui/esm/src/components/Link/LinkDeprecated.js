import React$1 from 'react';
import { warnOnce } from '../../utils/environment.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import Link$1 from './Link.js';

function ExternalLink(props) {
  warnOnce('ExternalLink', 'ExternalLink is deprecated. Please use Link instead.');
  return /*#__PURE__*/React$1.createElement(Link$1, _extends_1({
    external: true
  }, props));
}

function SafeLink(props) {
  warnOnce('SafeLink', 'SafeLink is deprecated. Please use Link instead.');
  return /*#__PURE__*/React$1.createElement(Link$1, props);
}

export { ExternalLink, SafeLink };
//# sourceMappingURL=LinkDeprecated.js.map
