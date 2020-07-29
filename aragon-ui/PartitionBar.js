'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var React = require('react');
var React__default = _interopDefault(React);
require('./_commonjsHelpers-72d386ba.js');
var index = require('./index-b0606964.js');
var defineProperty$1 = require('./defineProperty-0921a47c.js');
require('./toConsumableArray-d8a4a2c3.js');
require('styled-components');
require('./getPrototypeOf-2a661a20.js');
require('./color.js');
require('./components.js');
require('./contains-component.js');
require('./css.js');
require('./dayjs.min-e07657bf.js');
require('./date.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
require('./font.js');
require('./math-f4029164.js');
require('./characters.js');
require('./format.js');
require('./keycodes.js');
require('./url.js');
require('./web3.js');
require('./constants.js');
require('./breakpoints.js');
require('./springs.js');
require('./text-styles.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./Theme.js');
var objectWithoutProperties = require('./objectWithoutProperties-35db8ab0.js');
var Distribution = require('./Distribution.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$1._defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PartitionBar(_ref) {
  var data = _ref.data,
      caption = _ref.caption,
      colors = _ref.colors;
  environment.warnOnce('PartitionBar', 'PartitionBar is deprecated. Please use the Distribution component instead.'); // name => item (renderFullLegendItem)

  var renderFullLegendItem = caption ? function (_ref2) {
    var item = _ref2.item,
        props = objectWithoutProperties._objectWithoutProperties(_ref2, ["item"]);

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
  data: index.PropTypes.arrayOf(index.PropTypes.shape({
    name: index.PropTypes.string.isRequired,
    percentage: index.PropTypes.number.isRequired
  })).isRequired,
  colors: index.PropTypes.arrayOf(index.PropTypes.string),
  caption: index.PropTypes.func
};

exports.default = PartitionBar;
//# sourceMappingURL=PartitionBar.js.map
