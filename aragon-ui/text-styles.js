'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slicedToArray = require('./slicedToArray-0711941d.js');
require('./unsupportedIterableToArray-68db1d3b.js');
var defineProperty = require('./defineProperty-0921a47c.js');
require('./miscellaneous.js');
require('./environment.js');
var font = require('./font.js');

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty._defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var TEXT_STYLES = {
  title1: {
    size: 32,
    weight: 600,
    lineHeight: 1.5
  },
  title2: {
    size: 26,
    weight: 400,
    lineHeight: 1.5
  },
  title3: {
    size: 24,
    weight: 400,
    lineHeight: 1.5
  },
  title4: {
    size: 20,
    weight: 400,
    lineHeight: 1.5
  },
  body1: {
    size: 18,
    weight: 400,
    lineHeight: 1.5
  },
  body2: {
    size: 16,
    weight: 400,
    lineHeight: 1.5
  },
  body3: {
    size: 14,
    weight: 400,
    lineHeight: 1.5
  },
  body4: {
    size: 12,
    weight: 400,
    lineHeight: 1.5
  },
  label1: {
    size: 14,
    weight: 400,
    lineHeight: 1.5,
    transform: 'uppercase'
  },
  label2: {
    size: 12,
    weight: 600,
    lineHeight: 1.5,
    transform: 'uppercase'
  },
  label3: {
    size: 10,
    weight: 400,
    lineHeight: 1.5,
    transform: 'uppercase'
  },
  address1: {
    size: 16,
    weight: 400,
    lineHeight: 1.5,
    monospace: true
  },
  address2: {
    size: 14,
    weight: 400,
    lineHeight: 1.5,
    monospace: true
  }
};
var STYLES_CSS = {
  size: function size(value) {
    return "font-size: ".concat(value, "px;");
  },
  weight: function weight(value) {
    return "font-weight: ".concat(value, ";");
  },
  transform: function transform(value) {
    return "text-transform: ".concat(value, ";");
  },
  lineHeight: function lineHeight(value) {
    return "line-height: ".concat(value, ";");
  },
  monospace: function monospace(value) {
    return value ? font.monospace() : '';
  }
};

function textStyleToCss(textStyle) {
  return Object.entries(textStyle).map(function (_ref) {
    var _ref2 = slicedToArray._slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    return STYLES_CSS[name](value);
  }).join('');
}

function textStyle(name) {
  var includeLineHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (!TEXT_STYLES[name]) {
    throw new Error('textStyle(): the text style doesn’t exist: ' + name);
  }

  var style = _objectSpread({}, TEXT_STYLES[name]);

  if (!includeLineHeight) {
    delete style.lineHeight;
  }

  return textStyleToCss(style);
}

exports.TEXT_STYLES = TEXT_STYLES;
exports.textStyle = textStyle;
//# sourceMappingURL=text-styles.js.map
