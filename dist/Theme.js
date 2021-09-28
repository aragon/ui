'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-19b0c963.js');
var themeDark = require('./theme-dark.js');
var themeLight = require('./theme-light.js');
var environment = require('./environment.js');
var color = require('./color.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// The appearance can be either “dark” or “light”.

const APPEARANCES = ['dark', 'light'];
const EMBEDDED_THEMES = {
  dark: themeDark["default"],
  light: themeLight["default"]
};
const THEME_DEFAULT = 'light';
const RESERVED_KEYS = ['_appearance', '_name'];
const DEPRECATED_COLORS = new Map([['error', 'negative'], ['success', 'positive']]);
const COLOR_FALLBACK = '#FF00FF';

function getTheme(theme) {
  const validationError = validateTheme(theme);

  if (validationError !== null) {
    environment.warnOnce(`theme:theme-invalid:${validationError}`, `Theme invalid: ${validationError}. ` + `Using the theme “${THEME_DEFAULT}” instead.`);
    return EMBEDDED_THEMES[THEME_DEFAULT];
  }

  if (typeof theme === 'string' && EMBEDDED_THEMES[theme]) {
    return EMBEDDED_THEMES[theme];
  }

  const baseTheme = EMBEDDED_THEMES[theme._appearance === 'dark' ? 'dark' : 'light'];
  return { ...baseTheme,
    ...theme
  };
} // Setting the default is needed for cases when components are used without being wrapped in `<Theme />`, e.g. for tests.


const ThemeContext = /*#__PURE__*/React__default["default"].createContext(prepareTheme(getTheme(THEME_DEFAULT)));

function convertThemeColor(name, value) {
  if (RESERVED_KEYS.includes(name)) {
    return value;
  }

  try {
    return color["default"](value);
  } catch (err) {
    return color["default"](COLOR_FALLBACK);
  }
} // prepareTheme() does a few things:
// - Wrap every color in a color() object (see utils/color.js).
// - Filter out invalid colors added in custom themes.
// - Wraps the theme in a proxy that warns about deprecated colors.


function prepareTheme(theme) {
  const themeConverted = Object.fromEntries(Object.entries(theme).filter(([name]) => {
    if (!EMBEDDED_THEMES[THEME_DEFAULT][name]) {
      environment.warnOnce(`theme:invalid:${name}`, `Theme: the color “${name}” is invalid and will be ignored. ` + `Please check src/theme/theme-light.js in the aragonUI ` + `repository for a list of valid colors.`);
      return false;
    }

    return true;
  }).map(([name, value]) => [name, convertThemeColor(name, value)]));
  return new Proxy(themeConverted, {
    get(theme, name) {
      if (DEPRECATED_COLORS.has(name)) {
        environment.warnOnce(`theme:deprecated:${name}`, `useTheme(): the color “${name}” has been deprecated and will be removed soon. ` + `Please use “${DEPRECATED_COLORS.get(name)}” instead.`);
        return theme[DEPRECATED_COLORS.get(name)];
      }

      if (!theme[name]) {
        environment.warnOnce(`theme:unknown:${name}`, `useTheme(): the color “${name}” doesn’t exist in the theme.`);
        return COLOR_FALLBACK;
      }

      return theme[name];
    }

  });
}

function validateTheme(theme) {
  if (typeof theme === 'string') {
    return EMBEDDED_THEMES[theme] ? null : `the theme “${theme}” doesn’t exist`;
  }

  if (theme && !theme._name) {
    return `the “_name” key of the theme is missing`;
  }

  if (theme && !APPEARANCES.includes(theme._appearance)) {
    return `the “_appearance” key of the theme is missing`;
  }

  return null;
}

function Theme({
  theme,
  children
}) {
  if (theme === undefined) {
    theme = THEME_DEFAULT;
  }

  const themeConverted = React.useMemo(() => prepareTheme(getTheme(theme)), [theme]);
  return /*#__PURE__*/React__default["default"].createElement(ThemeContext.Provider, {
    value: themeConverted
  }, children);
}

Theme.propTypes = {
  children: index.PropTypes.node,
  theme: index.PropTypes.oneOfType([index.PropTypes.object, index.PropTypes.string])
};

function useTheme() {
  return React.useContext(ThemeContext);
}

Theme.THEME_DEFAULT = THEME_DEFAULT;
Theme.EMBEDDED_THEMES = EMBEDDED_THEMES;

exports.Theme = Theme;
exports.useTheme = useTheme;
//# sourceMappingURL=Theme.js.map
