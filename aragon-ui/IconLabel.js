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

function IconLabel(_ref) {
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
    d: "M20.835 10.825c.487.664.487 1.69 0 2.35l-3.08 4.202a2.6 2.6 0 01-.921.754 2.623 2.623 0 01-1.153.299H4.446A1.649 1.649 0 012.8 16.784V7.216c0-.907.739-1.646 1.646-1.646h11.235c.38 0 .787.115 1.15.3.364.184.698.445.923.752l3.08 4.203zm-4.203-3.378l3.078 4.199c.057.08.095.21.095.355a.623.623 0 01-.097.355l-3.081 4.202v.001a1.223 1.223 0 01-.427.33 1.257 1.257 0 01-.522.148H4.446a.252.252 0 01-.25-.25v-9.57c0-.137.114-.25.25-.25h11.235c.14 0 .332.053.52.149.189.095.346.218.43.33z",
    clipRule: "evenodd"
  }));
}

IconLabel.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconLabel;
//# sourceMappingURL=IconLabel.js.map
