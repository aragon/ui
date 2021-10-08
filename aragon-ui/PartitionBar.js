'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('./defineProperty-3cad0327.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var React = require('react');
var index = require('./index-37353731.js');
var Distribution = require('./Distribution.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('styled-components');
require('./Theme.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');
require('./constants.js');
require('./text-styles.js');
require('./font.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PartitionBar(_ref) {
  var data = _ref.data,
      caption = _ref.caption,
      colors = _ref.colors;
  environment.warnOnce('PartitionBar', 'PartitionBar is deprecated. Please use the Distribution component instead.'); // name => item (renderFullLegendItem)

  var renderFullLegendItem = caption ? function (_ref2) {
    var item = _ref2.item,
        props = objectWithoutProperties.objectWithoutProperties(_ref2, ["item"]);

    return caption(_objectSpread({
      name: item
    }, props));
  } : undefined; // name => item (items)

  var items = data.map(function (_ref3) {
    var name = _ref3.name,
        percentage = _ref3.percentage;
    return {
      item: name,
      percentage: percentage
    };
  });
  return /*#__PURE__*/React__default['default'].createElement(Distribution['default'], {
    items: items,
    renderFullLegendItem: renderFullLegendItem,
    colors: colors
  });
}

PartitionBar.propTypes = {
  data: index.propTypes.arrayOf(index.propTypes.shape({
    name: index.propTypes.string.isRequired,
    percentage: index.propTypes.number.isRequired
  })).isRequired,
  colors: index.propTypes.arrayOf(index.propTypes.string),
  caption: index.propTypes.func
};

exports.default = PartitionBar;
//# sourceMappingURL=PartitionBar.js.map
