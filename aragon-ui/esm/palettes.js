import { _ as _slicedToArray } from './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import 'react';
import './_commonjsHelpers-97e6d7b1.js';
import './toConsumableArray-127424c2.js';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import { warnOnce, warn } from './environment.js';
import './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import aragon from './aragon.js';

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
      _value$slice$split2 = _slicedToArray(_value$slice$split, 2),
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
    var _ref2 = _slicedToArray(_ref, 2),
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
    var _ref4 = _slicedToArray(_ref3, 2),
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


var _Object$fromEntries = Object.fromEntries(Object.entries(generateGroups(aragon)).map(function (_ref5) {
  var _ref6 = _slicedToArray(_ref5, 2),
      name = _ref6[0],
      group = _ref6[1];

  return [name, new Proxy(group, {
    get: function get(group, colorName) {
      if (group[colorName]) {
        warnOnce("theme-legacy:".concat(name, ".").concat(colorName), "".concat(name, ".").concat(colorName, " was accessed but ").concat(name, " will be removed soon, ") + "please use useTheme() instead.");
      } else {
        warn("".concat(name, ".").concat(colorName, " doesn\u2019t exist. ").concat(name, " will be removed soon, ") + "please use useTheme() instead.");
      }

      return group[colorName];
    }
  })];
})),
    themeDark = _Object$fromEntries.themeDark,
    theme = _Object$fromEntries.theme,
    brand = _Object$fromEntries.brand,
    colors = _Object$fromEntries.colors; // TODO: show a deprecating warning when any of these colors get accessed once.

export { brand, colors, theme, themeDark };
//# sourceMappingURL=palettes.js.map
