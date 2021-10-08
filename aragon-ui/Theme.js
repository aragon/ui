'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var slicedToArray = require('./slicedToArray-a8a77f0e.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var React = require('react');
var index = require('./index-37353731.js');
var themeDark = require('./theme-dark.js');
var themeLight = require('./theme-light.js');
var environment = require('./environment.js');
var color = require('./color.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./miscellaneous.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
// The appearance can be either “dark” or “light”.

var APPEARANCES = ['dark', 'light'];
var EMBEDDED_THEMES = {
  dark: themeDark['default'],
  light: themeLight['default']
};
var THEME_DEFAULT = 'light';
var RESERVED_KEYS = ['_appearance', '_name'];
var DEPRECATED_COLORS = new Map([['error', 'negative'], ['success', 'positive']]);
var COLOR_FALLBACK = '#FF00FF';

function getTheme(theme) {
  var validationError = validateTheme(theme);

  if (validationError !== null) {
    environment.warnOnce("theme:theme-invalid:".concat(validationError), "Theme invalid: ".concat(validationError, ". ") + "Using the theme \u201C".concat(THEME_DEFAULT, "\u201D instead."));
    return EMBEDDED_THEMES[THEME_DEFAULT];
  }

  if (typeof theme === 'string' && EMBEDDED_THEMES[theme]) {
    return EMBEDDED_THEMES[theme];
  }

  var baseTheme = EMBEDDED_THEMES[theme._appearance === 'dark' ? 'dark' : 'light'];
  return _objectSpread(_objectSpread({}, baseTheme), theme);
} // Setting the default is needed for cases when components are used without being wrapped in `<Theme />`, e.g. for tests.


var ThemeContext = /*#__PURE__*/React__default['default'].createContext(prepareTheme(getTheme(THEME_DEFAULT)));

function convertThemeColor(name, value) {
  if (RESERVED_KEYS.includes(name)) {
    return value;
  }

  try {
    return color['default'](value);
  } catch (err) {
    return color['default'](COLOR_FALLBACK);
  }
} // prepareTheme() does a few things:
// - Wrap every color in a color() object (see utils/color.js).
// - Filter out invalid colors added in custom themes.
// - Wraps the theme in a proxy that warns about deprecated colors.


function prepareTheme(theme) {
  var themeConverted = Object.fromEntries(Object.entries(theme).filter(function (_ref) {
    var _ref2 = slicedToArray.slicedToArray(_ref, 1),
        name = _ref2[0];

    if (!EMBEDDED_THEMES[THEME_DEFAULT][name]) {
      environment.warnOnce("theme:invalid:".concat(name), "Theme: the color \u201C".concat(name, "\u201D is invalid and will be ignored. ") + "Please check src/theme/theme-light.js in the aragonUI " + "repository for a list of valid colors.");
      return false;
    }

    return true;
  }).map(function (_ref3) {
    var _ref4 = slicedToArray.slicedToArray(_ref3, 2),
        name = _ref4[0],
        value = _ref4[1];

    return [name, convertThemeColor(name, value)];
  }));
  return new Proxy(themeConverted, {
    get: function get(theme, name) {
      if (DEPRECATED_COLORS.has(name)) {
        environment.warnOnce("theme:deprecated:".concat(name), "useTheme(): the color \u201C".concat(name, "\u201D has been deprecated and will be removed soon. ") + "Please use \u201C".concat(DEPRECATED_COLORS.get(name), "\u201D instead."));
        return theme[DEPRECATED_COLORS.get(name)];
      }

      if (!theme[name]) {
        environment.warnOnce("theme:unknown:".concat(name), "useTheme(): the color \u201C".concat(name, "\u201D doesn\u2019t exist in the theme."));
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

  var themeConverted = React.useMemo(function () {
    return prepareTheme(getTheme(theme));
  }, [theme]);
  return /*#__PURE__*/React__default['default'].createElement(ThemeContext.Provider, {
    value: themeConverted
  }, children);
}

Theme.propTypes = {
  children: index.propTypes.node,
  theme: index.propTypes.oneOfType([index.propTypes.object, index.propTypes.string])
};

function useTheme() {
  return React.useContext(ThemeContext);
}

Theme.THEME_DEFAULT = THEME_DEFAULT;
Theme.EMBEDDED_THEMES = EMBEDDED_THEMES;

exports.Theme = Theme;
exports.useTheme = useTheme;
//# sourceMappingURL=Theme.js.map
