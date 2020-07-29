import { u as unwrapExports, c as createCommonjsModule } from './_commonjsHelpers-97e6d7b1.js';

var getDisplayName_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDisplayName;
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}
});

var getDisplayName = unwrapExports(getDisplayName_1);

export { getDisplayName as g };
//# sourceMappingURL=getDisplayName-d5fc7707.js.map
