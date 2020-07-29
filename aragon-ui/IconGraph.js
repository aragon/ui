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

function IconGraph(_ref) {
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
    d: "M12.736 4.735h-1.471c-.762 0-1.382.62-1.382 1.382v11.766c0 .762.62 1.382 1.382 1.382h1.47c.763 0 1.382-.62 1.382-1.382V6.117c0-.762-.62-1.382-1.381-1.382zm.089 13.148a.09.09 0 01-.09.089h-1.47a.09.09 0 01-.09-.09V6.118a.09.09 0 01.09-.089h1.47c.05 0 .09.04.09.09v11.765zm5.793-9.471h-1.47c-.762 0-1.382.62-1.382 1.382v8.089c0 .762.62 1.382 1.382 1.382h1.47c.762 0 1.382-.62 1.382-1.382v-8.09c0-.76-.62-1.38-1.382-1.38zm.09 9.47c0 .05-.04.09-.09.09h-1.47a.09.09 0 01-.09-.09V9.795c0-.05.04-.09.09-.09h1.47a.09.09 0 01.09.09v8.089zM6.853 12.089H5.382c-.762 0-1.382.62-1.382 1.382v4.412c0 .762.62 1.382 1.382 1.382h1.47c.762 0 1.382-.62 1.382-1.382V13.47c0-.762-.62-1.382-1.381-1.382zm.089 5.794a.09.09 0 01-.09.089h-1.47a.09.09 0 01-.09-.09v-4.411c0-.05.04-.09.09-.09h1.47c.05 0 .09.04.09.09v4.412z"
  }));
}

IconGraph.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconGraph;
//# sourceMappingURL=IconGraph.js.map
