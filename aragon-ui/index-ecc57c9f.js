'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-b0606964.js');

const r=new Map;function a(t){return r.has(t)||r.set(t,React__default.createContext({inside:!1,data:null})),r.get(t)}function i({children:t,data:n,name:r}){const i=a(r);return React__default.createElement(i.Provider,{value:{inside:!0,data:n}},t)}function o(e){const{inside:n,data:r}=React.useContext(a(e));return [n,r]}i.propTypes={children:index.PropTypes.node,data:index.PropTypes.any,name:index.PropTypes.string.isRequired};

exports.i = i;
exports.o = o;
//# sourceMappingURL=index-ecc57c9f.js.map
