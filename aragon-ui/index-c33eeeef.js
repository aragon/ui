'use strict';

var React = require('react');
var index = require('./index-37353731.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const r=new Map;function a(t){return r.has(t)||r.set(t,React__default['default'].createContext({inside:!1,data:null})),r.get(t)}function i({children:t,data:n,name:r}){const i=a(r);return React__default['default'].createElement(i.Provider,{value:{inside:!0,data:n}},t)}function o(e){const{inside:n,data:r}=React.useContext(a(e));return [n,r]}i.propTypes={children:index.propTypes.node,data:index.propTypes.any,name:index.propTypes.string.isRequired};

exports.i = i;
exports.o = o;
//# sourceMappingURL=index-c33eeeef.js.map
