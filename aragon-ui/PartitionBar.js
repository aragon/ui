'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-1b94f6bc.js');
var index = require('./index-46d0e707.js');
var defineProperty = require('./defineProperty-3cad0327.js');
require('./toConsumableArray-cc0d28a9.js');
require('styled-components');
require('./getPrototypeOf-55c9e80c.js');
require('./color.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./constants.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var objectWithoutProperties = require('./objectWithoutProperties-c6d3675c.js');
var Distribution = require('./Distribution.js');

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
  return /*#__PURE__*/React__default.createElement(Distribution.default, {
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
