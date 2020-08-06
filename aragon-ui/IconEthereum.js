'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-46d0e707.js');
require('./miscellaneous.js');
require('./environment.js');
require('./constants.js');
var _extends$1 = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
require('./index-f5a9917e.js');
var IconPropTypes = require('./IconPropTypes-dd9d2cb1.js');

function IconEthereum(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends$1._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12 3a.59.59 0 01.502.248l5.402 7.785a.53.53 0 01.08.432.556.556 0 01-.277.351l-5.402 2.931a.606.606 0 01-.305.073.606.606 0 01-.306-.073l-5.401-2.93a.556.556 0 01-.277-.352.53.53 0 01.08-.432l5.402-7.785A.59.59 0 0112 3zm-.598 2.394l-3.335 4.805 3.335-1.225v-3.58zm0 4.764L7.93 11.433l3.47 1.883v-3.158zm1.197 3.158l3.47-1.883-3.47-1.275v3.158zm0-4.342l3.334 1.225-3.335-4.805v3.58zm-6.445 3.89a.604.604 0 01.728-.098L12 15.702l5.118-2.936a.604.604 0 01.728.098.531.531 0 01.045.697l-5.32 7.056a.568.568 0 01-.376.357A.609.609 0 0112 21a.61.61 0 01-.195-.026.567.567 0 01-.376-.357L6.11 13.56a.531.531 0 01.045-.697zm6.444 5.82l2.704-3.586-2.704 1.55v2.035zm-1.197-2.036v2.035l-2.703-3.585 2.704 1.55z",
    clipRule: "evenodd"
  }));
}

IconEthereum.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconEthereum;
//# sourceMappingURL=IconEthereum.js.map
