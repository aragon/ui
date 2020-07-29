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

function IconMail(_ref) {
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
    d: "M17.406 6H6.594a1.948 1.948 0 00-1.945 1.945v8.11c0 1.072.872 1.945 1.945 1.945h10.812a1.948 1.948 0 001.946-1.945v-8.11A1.948 1.948 0 0017.406 6zm.758 10.055c0 .417-.34.757-.758.757H6.594a.758.758 0 01-.758-.757v-8.11c0-.417.34-.757.758-.757h10.812c.418 0 .758.34.758.757v8.11z"
  }), /*#__PURE__*/React__default.createElement("path", {
    fill: "currentColor",
    d: "M19.245 7.605a.594.594 0 00-.827-.146L12 11.95 5.584 7.459a.594.594 0 10-.681.973l6.757 4.73a.593.593 0 00.681 0l6.758-4.73a.594.594 0 00.146-.827z"
  }));
}

IconMail.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconMail;
//# sourceMappingURL=IconMail.js.map
