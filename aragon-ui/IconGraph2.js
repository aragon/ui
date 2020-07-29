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

function IconGraph2(_ref) {
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
    d: "M18.377 5H16.96c-.734 0-1.331.597-1.331 1.331V17.67c0 .734.597 1.331 1.331 1.331h1.417c.734 0 1.332-.597 1.332-1.331V6.33c0-.734-.598-1.331-1.332-1.331zm.086 12.669a.086.086 0 01-.086.085H16.96a.086.086 0 01-.086-.085V6.33c0-.047.039-.085.086-.085h1.417c.048 0 .086.038.086.085v11.34zm-5.754-9.126h-1.417c-.735 0-1.332.597-1.332 1.331v7.795c0 .734.597 1.331 1.332 1.331h1.417c.734 0 1.331-.597 1.331-1.331V9.874c0-.734-.597-1.331-1.331-1.331zm.086 9.126a.086.086 0 01-.086.085h-1.417a.086.086 0 01-.086-.085V9.874c0-.047.038-.086.086-.086h1.417c.047 0 .086.039.086.086v7.795zM7.04 12.086H5.623c-.734 0-1.332.597-1.332 1.331v4.252c0 .734.598 1.331 1.332 1.331H7.04c.734 0 1.331-.597 1.331-1.331v-4.252c0-.734-.597-1.331-1.331-1.331zm.086 5.583a.086.086 0 01-.086.085H5.623a.086.086 0 01-.086-.085v-4.252c0-.047.038-.086.086-.086H7.04c.047 0 .086.039.086.086v4.252z"
  }));
}

IconGraph2.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconGraph2;
//# sourceMappingURL=IconGraph2.js.map
