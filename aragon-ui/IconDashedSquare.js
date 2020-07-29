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

function IconDashedSquare(_ref) {
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
    stroke: "currentColor",
    strokeWidth: 0.2,
    d: "M9.14 5H6.995C5.895 5 5 5.895 5 6.995V9.14a.566.566 0 001.131 0V6.995c0-.476.388-.864.864-.864H9.14A.566.566 0 009.14 5zm7.865 0H14.86a.566.566 0 100 1.131h2.145c.476 0 .864.388.864.864V9.14a.565.565 0 101.131 0V6.995C19 5.895 18.105 5 17.005 5zm1.43 9.294a.565.565 0 00-.566.566v2.145a.865.865 0 01-.864.864H14.86a.565.565 0 100 1.13h2.145c1.1 0 1.995-.894 1.995-1.994V14.86a.566.566 0 00-.565-.566zM9.14 17.869H6.995a.865.865 0 01-.864-.864V14.86a.566.566 0 10-1.131 0v2.145C5 18.105 5.895 19 6.995 19H9.14a.566.566 0 000-1.131z"
  }));
}

IconDashedSquare.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconDashedSquare;
//# sourceMappingURL=IconDashedSquare.js.map
