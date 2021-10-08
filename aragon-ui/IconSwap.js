'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var React = require('react');
var IconPropTypes = require('./IconPropTypes-b9997416.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./index-c33eeeef.js');
require('./index-37353731.js');
require('./constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function IconSwap(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 22 21"
  }, props), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M21.399 12l-3.033-3.034a.566.566 0 00-.8.8l2.633 2.633-2.633 2.634a.566.566 0 00.8.8l3.033-3.034a.565.565 0 000-.8zm-16.166-.967L2.6 8.399l2.633-2.633a.566.566 0 10-.8-.8L1.4 8a.566.566 0 000 .8l3.033 3.033a.566.566 0 00.8-.8z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M21.564 12.4a.566.566 0 00-.565-.566H9.921a.566.566 0 000 1.131H21a.566.566 0 00.566-.566zm-8.121-4a.565.565 0 00-.566-.566H1.8a.566.566 0 100 1.131h11.077a.565.565 0 00.566-.565z"
  }));
}

IconSwap.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconSwap;
//# sourceMappingURL=IconSwap.js.map
