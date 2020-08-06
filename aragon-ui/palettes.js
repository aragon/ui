'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./miscellaneous.js');
var environment = require('./environment.js');
var aragon = require('./aragon.js');

var THEME_NAME = 'Aragon UI';
var THEME_DARK_NAME = 'Aragon UI Dark';
var BRAND_NAME = 'Aragon Brand'; // Name of the group a given palette belong to

var getGroupName = function getGroupName(name) {
  if (name === THEME_NAME) return 'theme';
  if (name === THEME_DARK_NAME) return 'themeDark';
  if (name === BRAND_NAME) return 'brand';
  return 'colors';
}; // Resolve a single color


var resolveColor = function resolveColor(value, palettes) {
  // already resolved color
  if (!value.startsWith('=')) {
    return value;
  }

  var _value$slice$split = value.slice(1).split('.'),
      _value$slice$split2 = slicedToArray.slicedToArray(_value$slice$split, 2),
      paletteName = _value$slice$split2[0],
      key = _value$slice$split2[1];

  var color = palettes[paletteName] && palettes[paletteName][key];

  if (!color) {
    throw new Error("resolveColor: ".concat(value, " doesn\u2019t seem to exist"));
  } // follow the references until we find one


  if (color.startsWith('=')) {
    return resolveColor(color, palettes);
  }

  return color;
}; // Resolve all the colors in a palette


var resolveColors = function resolveColors(palette, palettes) {
  return Object.entries(palette).reduce(function (pal, _ref) {
    var _ref2 = slicedToArray.slicedToArray(_ref, 2),
        name = _ref2[0],
        value = _ref2[1];

    if (typeof value === 'string') {
      pal[name] = resolveColor(value, palettes);
    }

    return pal;
  }, {});
}; // Prepare groups from the palettes: theme, themeDark, brand and colors.


var generateGroups = function generateGroups(palettes) {
  return Object.entries(palettes).reduce(function (groups, _ref3) {
    var _ref4 = slicedToArray.slicedToArray(_ref3, 2),
        paletteName = _ref4[0],
        palette = _ref4[1];

    var groupName = getGroupName(paletteName);

    if (groupName === 'colors') {
      groups.colors[paletteName] = resolveColors(palette, palettes);
    } else {
      groups[groupName] = resolveColors(palette, palettes);
    }

    return groups;
  }, {
    colors: {}
  });
}; // Deprecate any access to the palettes


var _Object$fromEntries = Object.fromEntries(Object.entries(generateGroups(aragon.default)).map(function (_ref5) {
  var _ref6 = slicedToArray.slicedToArray(_ref5, 2),
      name = _ref6[0],
      group = _ref6[1];

  return [name, new Proxy(group, {
    get: function get(group, colorName) {
      if (group[colorName]) {
        environment.warnOnce("theme-legacy:".concat(name, ".").concat(colorName), "".concat(name, ".").concat(colorName, " was accessed but ").concat(name, " will be removed soon, ") + "please use useTheme() instead.");
      } else {
        environment.warn("".concat(name, ".").concat(colorName, " doesn\u2019t exist. ").concat(name, " will be removed soon, ") + "please use useTheme() instead.");
      }

      return group[colorName];
    }
  })];
})),
    themeDark = _Object$fromEntries.themeDark,
    theme = _Object$fromEntries.theme,
    brand = _Object$fromEntries.brand,
    colors = _Object$fromEntries.colors; // TODO: show a deprecating warning when any of these colors get accessed once.

exports.brand = brand;
exports.colors = colors;
exports.theme = theme;
exports.themeDark = themeDark;
//# sourceMappingURL=palettes.js.map
