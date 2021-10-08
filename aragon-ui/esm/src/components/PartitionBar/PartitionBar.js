import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import Distribution from '../Distribution/Distribution.js';
import { warnOnce } from '../../utils/environment.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PartitionBar(_ref) {
  var data = _ref.data,
      caption = _ref.caption,
      colors = _ref.colors;
  warnOnce('PartitionBar', 'PartitionBar is deprecated. Please use the Distribution component instead.'); // name => item (renderFullLegendItem)

  var renderFullLegendItem = caption ? function (_ref2) {
    var item = _ref2.item,
        props = objectWithoutProperties(_ref2, ["item"]);

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
  return /*#__PURE__*/React.createElement(Distribution, {
    items: items,
    renderFullLegendItem: renderFullLegendItem,
    colors: colors
  });
}

PartitionBar.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired
  })).isRequired,
  colors: propTypes.arrayOf(propTypes.string),
  caption: propTypes.func
};

export default PartitionBar;
//# sourceMappingURL=PartitionBar.js.map
