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

function IconStarFilled(_ref) {
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
    d: "M19.968 10.066a.656.656 0 00-.52-.46l-4.746-.727-2.122-4.502A.644.644 0 0012 4a.644.644 0 00-.58.377L9.299 8.88l-4.745.726a.655.655 0 00-.521.461.7.7 0 00.163.694l3.434 3.502-.81 4.947a.692.692 0 00.257.662.622.622 0 00.68.051L12 17.585l4.244 2.337a.622.622 0 00.68-.051.692.692 0 00.258-.662l-.81-4.947 3.433-3.502a.7.7 0 00.163-.694z"
  }));
}

IconStarFilled.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconStarFilled;
//# sourceMappingURL=IconStarFilled.js.map
