import slicedToArray from '../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import defineProperty from '../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React, { useContext, useMemo } from 'react';
import propTypes from '../../node_modules/prop-types/index.js';
import dark from './theme-dark.js';
import light from './theme-light.js';
import { warnOnce } from '../utils/environment.js';
import color from '../utils/color.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
// The appearance can be either “dark” or “light”.

var APPEARANCES = ['dark', 'light'];
var EMBEDDED_THEMES = {
  dark: dark,
  light: light
};
var THEME_DEFAULT = 'light';
var RESERVED_KEYS = ['_appearance', '_name'];
var DEPRECATED_COLORS = new Map([['error', 'negative'], ['success', 'positive']]);
var COLOR_FALLBACK = '#FF00FF';

function getTheme(theme) {
  var validationError = validateTheme(theme);

  if (validationError !== null) {
    warnOnce("theme:theme-invalid:".concat(validationError), "Theme invalid: ".concat(validationError, ". ") + "Using the theme \u201C".concat(THEME_DEFAULT, "\u201D instead."));
    return EMBEDDED_THEMES[THEME_DEFAULT];
  }

  if (typeof theme === 'string' && EMBEDDED_THEMES[theme]) {
    return EMBEDDED_THEMES[theme];
  }

  var baseTheme = EMBEDDED_THEMES[theme._appearance === 'dark' ? 'dark' : 'light'];
  return _objectSpread(_objectSpread({}, baseTheme), theme);
} // Setting the default is needed for cases when components are used without being wrapped in `<Theme />`, e.g. for tests.


var ThemeContext = /*#__PURE__*/React.createContext(prepareTheme(getTheme(THEME_DEFAULT)));

function convertThemeColor(name, value) {
  if (RESERVED_KEYS.includes(name)) {
    return value;
  }

  try {
    return color(value);
  } catch (err) {
    return color(COLOR_FALLBACK);
  }
} // prepareTheme() does a few things:
// - Wrap every color in a color() object (see utils/color.js).
// - Filter out invalid colors added in custom themes.
// - Wraps the theme in a proxy that warns about deprecated colors.


function prepareTheme(theme) {
  var themeConverted = Object.fromEntries(Object.entries(theme).filter(function (_ref) {
    var _ref2 = slicedToArray(_ref, 1),
        name = _ref2[0];

    if (!EMBEDDED_THEMES[THEME_DEFAULT][name]) {
      warnOnce("theme:invalid:".concat(name), "Theme: the color \u201C".concat(name, "\u201D is invalid and will be ignored. ") + "Please check src/theme/theme-light.js in the aragonUI " + "repository for a list of valid colors.");
      return false;
    }

    return true;
  }).map(function (_ref3) {
    var _ref4 = slicedToArray(_ref3, 2),
        name = _ref4[0],
        value = _ref4[1];

    return [name, convertThemeColor(name, value)];
  }));
  return new Proxy(themeConverted, {
    get: function get(theme, name) {
      if (DEPRECATED_COLORS.has(name)) {
        warnOnce("theme:deprecated:".concat(name), "useTheme(): the color \u201C".concat(name, "\u201D has been deprecated and will be removed soon. ") + "Please use \u201C".concat(DEPRECATED_COLORS.get(name), "\u201D instead."));
        return theme[DEPRECATED_COLORS.get(name)];
      }

      if (!theme[name]) {
        warnOnce("theme:unknown:".concat(name), "useTheme(): the color \u201C".concat(name, "\u201D doesn\u2019t exist in the theme."));
        return COLOR_FALLBACK;
      }

      return theme[name];
    }
  });
}

function validateTheme(theme) {
  if (typeof theme === 'string') {
    return EMBEDDED_THEMES[theme] ? null : "the theme \u201C".concat(theme, "\u201D doesn\u2019t exist");
  }

  if (theme && !theme._name) {
    return "the \u201C_name\u201D key of the theme is missing";
  }

  if (theme && !APPEARANCES.includes(theme._appearance)) {
    return "the \u201C_appearance\u201D key of the theme is missing";
  }

  return null;
}

function Theme(_ref5) {
  var theme = _ref5.theme,
      children = _ref5.children;

  if (theme === undefined) {
    theme = THEME_DEFAULT;
  }

  var themeConverted = useMemo(function () {
    return prepareTheme(getTheme(theme));
  }, [theme]);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: themeConverted
  }, children);
}

Theme.propTypes = {
  children: propTypes.node,
  theme: propTypes.oneOfType([propTypes.object, propTypes.string])
};

function useTheme() {
  return useContext(ThemeContext);
}

Theme.THEME_DEFAULT = THEME_DEFAULT;
Theme.EMBEDDED_THEMES = EMBEDDED_THEMES;

export { Theme, useTheme };
//# sourceMappingURL=Theme2.js.map
