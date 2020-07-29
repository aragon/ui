'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
require('./index-b0606964.js');
require('./defineProperty-0921a47c.js');
require('styled-components');
require('./miscellaneous.js');
require('./environment.js');
require('./font.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
var _extends = require('./extends-40571110.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
require('./index-ecc57c9f.js');
var IconPropTypes = require('./IconPropTypes-56de5759.js');

function IconEthereum(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
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
