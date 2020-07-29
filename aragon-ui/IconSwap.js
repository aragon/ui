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

function IconSwap(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties._objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default.createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 22 21"
  }, props), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M21.399 12l-3.033-3.034a.566.566 0 00-.8.8l2.633 2.633-2.633 2.634a.566.566 0 00.8.8l3.033-3.034a.565.565 0 000-.8zm-16.166-.967L2.6 8.399l2.633-2.633a.566.566 0 10-.8-.8L1.4 8a.566.566 0 000 .8l3.033 3.033a.566.566 0 00.8-.8z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M21.564 12.4a.566.566 0 00-.565-.566H9.921a.566.566 0 000 1.131H21a.566.566 0 00.566-.566zm-8.121-4a.565.565 0 00-.566-.566H1.8a.566.566 0 100 1.131h11.077a.565.565 0 00.566-.565z"
  }));
}

IconSwap.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconSwap;
//# sourceMappingURL=IconSwap.js.map
