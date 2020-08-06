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

function IconShare(_ref) {
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
    fillRule: "evenodd",
    d: "M12.775 5.052a.606.606 0 01.634.089l6.386 5.377a.57.57 0 01.205.434.57.57 0 01-.202.435l-6.386 5.442a.606.606 0 01-.636.091.576.576 0 01-.348-.525v-2.548c-2.13.083-5.798 1.119-7.202 4.778a.595.595 0 01-.624.371.585.585 0 01-.52-.501c-.22-1.708-.053-4.281 1.207-6.453 1.222-2.106 3.443-3.777 7.139-3.938V5.577c0-.226.135-.431.347-.525zm.84 1.787v1.829a.585.585 0 01-.594.577c-3.634 0-5.627 1.517-6.699 3.364-.657 1.133-.98 2.412-1.09 3.588 2.233-2.95 5.978-3.586 7.817-3.501a.584.584 0 01.565.576v1.85l4.89-4.166-4.89-4.117z",
    clipRule: "evenodd"
  }));
}

IconShare.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconShare;
//# sourceMappingURL=IconShare.js.map
