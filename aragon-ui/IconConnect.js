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

function IconConnect(_ref) {
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
    d: "M19.204 10.255a.646.646 0 00-.585-.372h-5.887l.645-5.156a.646.646 0 00-1.138-.494l-7.354 8.825a.646.646 0 00.496 1.06h5.887l-.645 5.156a.647.647 0 001.138.494l7.354-8.825a.647.647 0 00.09-.688zm-7.025 6.992l.462-3.695a.646.646 0 00-.641-.727H6.761l5.06-6.071-.462 3.696a.646.646 0 00.641.726h5.239l-5.06 6.071z"
  }));
}

IconConnect.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconConnect;
//# sourceMappingURL=IconConnect.js.map
