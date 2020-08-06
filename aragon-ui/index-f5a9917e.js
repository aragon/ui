'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-46d0e707.js');

const r=new Map;function a(t){return r.has(t)||r.set(t,React__default.createContext({inside:!1,data:null})),r.get(t)}function i({children:t,data:n,name:r}){const i=a(r);return React__default.createElement(i.Provider,{value:{inside:!0,data:n}},t)}function o(e){const{inside:n,data:r}=React.useContext(a(e));return [n,r]}i.propTypes={children:index.propTypes.node,data:index.propTypes.any,name:index.propTypes.string.isRequired};

exports.i = i;
exports.o = o;
//# sourceMappingURL=index-f5a9917e.js.map
