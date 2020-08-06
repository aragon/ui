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

function IconGrid(_ref) {
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
    d: "M9.549 4H5.463C4.657 4 4 4.657 4 5.463V9.55c0 .807.657 1.463 1.463 1.463H9.55c.807 0 1.463-.656 1.463-1.463V5.463A1.466 1.466 0 009.55 4zm.17 5.549a.17.17 0 01-.17.17H5.463a.171.171 0 01-.17-.17V5.463a.17.17 0 01.17-.17H9.55a.17.17 0 01.17.17V9.55zM18.537 4H14.45c-.807 0-1.463.657-1.463 1.463V9.55c0 .807.656 1.463 1.463 1.463h4.086c.807 0 1.463-.656 1.463-1.463V5.463A1.463 1.463 0 0018.537 4zm.17 5.549a.17.17 0 01-.17.17H14.45a.171.171 0 01-.17-.17V5.463a.17.17 0 01.17-.17h4.086a.17.17 0 01.17.17V9.55zm-.17 3.439H14.45c-.807 0-1.463.656-1.463 1.463v4.086c0 .807.656 1.463 1.463 1.463h4.086c.807 0 1.463-.657 1.463-1.463V14.45c0-.807-.656-1.463-1.463-1.463zm.17 5.549a.17.17 0 01-.17.17H14.45a.17.17 0 01-.17-.17V14.45a.17.17 0 01.17-.17h4.086a.17.17 0 01.17.17v4.086zm-9.158-5.549H5.463c-.806 0-1.463.656-1.463 1.463v4.086C4 19.343 4.657 20 5.463 20H9.55c.807 0 1.463-.657 1.463-1.463V14.45c0-.807-.656-1.463-1.463-1.463zm.17 5.549a.17.17 0 01-.17.17H5.463a.17.17 0 01-.17-.17V14.45a.17.17 0 01.17-.17H9.55a.17.17 0 01.17.17v4.086z"
  }));
}

IconGrid.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconGrid;
//# sourceMappingURL=IconGrid.js.map
