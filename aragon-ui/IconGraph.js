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

function IconGraph(_ref) {
  var size = _ref.size,
      props = objectWithoutProperties.objectWithoutProperties(_ref, ["size"]);

  var sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends._extends_1({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M12.736 4.735h-1.471c-.762 0-1.382.62-1.382 1.382v11.766c0 .762.62 1.382 1.382 1.382h1.47c.763 0 1.382-.62 1.382-1.382V6.117c0-.762-.62-1.382-1.381-1.382zm.089 13.148a.09.09 0 01-.09.089h-1.47a.09.09 0 01-.09-.09V6.118a.09.09 0 01.09-.089h1.47c.05 0 .09.04.09.09v11.765zm5.793-9.471h-1.47c-.762 0-1.382.62-1.382 1.382v8.089c0 .762.62 1.382 1.382 1.382h1.47c.762 0 1.382-.62 1.382-1.382v-8.09c0-.76-.62-1.38-1.382-1.38zm.09 9.47c0 .05-.04.09-.09.09h-1.47a.09.09 0 01-.09-.09V9.795c0-.05.04-.09.09-.09h1.47a.09.09 0 01.09.09v8.089zM6.853 12.089H5.382c-.762 0-1.382.62-1.382 1.382v4.412c0 .762.62 1.382 1.382 1.382h1.47c.762 0 1.382-.62 1.382-1.382V13.47c0-.762-.62-1.382-1.381-1.382zm.089 5.794a.09.09 0 01-.09.089h-1.47a.09.09 0 01-.09-.09v-4.411c0-.05.04-.09.09-.09h1.47c.05 0 .09.04.09.09v4.412z"
  }));
}

IconGraph.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconGraph;
//# sourceMappingURL=IconGraph.js.map
