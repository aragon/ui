'use strict';

var _commonjsHelpers = require('./_commonjsHelpers-72d386ba.js');

var getDisplayName_1 = _commonjsHelpers.createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDisplayName;
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}
});

var getDisplayName = _commonjsHelpers.unwrapExports(getDisplayName_1);

exports.getDisplayName = getDisplayName;
//# sourceMappingURL=getDisplayName-7ab6d318.js.map
