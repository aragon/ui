'use strict';

var _commonjsHelpers = require('./_commonjsHelpers-1b94f6bc.js');

var getDisplayName_1 = _commonjsHelpers.createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDisplayName;
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}
});

var getDisplayName = /*@__PURE__*/_commonjsHelpers.unwrapExports(getDisplayName_1);

exports.getDisplayName = getDisplayName;
//# sourceMappingURL=getDisplayName-7f913e84.js.map
