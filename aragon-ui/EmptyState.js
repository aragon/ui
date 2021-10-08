'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('./defineProperty-3cad0327.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var LoadingRing = require('./LoadingRing.js');
var Link = require('./Link.js');
var Theme = require('./Theme.js');
var PublicUrl = require('./PublicUrl-a6067988.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-023d783e.js');
require('./slicedToArray-a8a77f0e.js');
require('./unsupportedIterableToArray-f175acfa.js');
require('./objectWithoutProperties-c6d3675c.js');
require('./index-c33eeeef.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./getPrototypeOf-55c9e80c.js');
require('./toConsumableArray-cc0d28a9.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./css.js');
require('./font.js');
require('./getDisplayName-7f913e84.js');
require('./url.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var illustrationRedImage = "5140b2d928ee3408.png";

var illustrationBlueImage = "665de3412d16a795.png";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty.defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useEmptyStateParts(status, configurator, functionMode) {
  var publicUrl = PublicUrl.usePublicUrl();
  var defaultConfigurator = React.useMemo(function () {
    // eslint-disable-next-line react/prop-types
    var Illustration = function Illustration(_ref) {
      var path = _ref.path;
      return /*#__PURE__*/React__default['default'].createElement("img", {
        src: publicUrl + path,
        alt: "",
        height: 20 * constants.GU
      });
    };

    return {
      default: {
        displayLoader: false,
        title: 'No data available.',
        subtitle: null,
        illustration: /*#__PURE__*/React__default['default'].createElement(Illustration, {
          path: illustrationBlueImage
        }),
        clearLabel: null
      },
      loading: {
        displayLoader: true,
        title: 'Loading data…',
        subtitle: null,
        illustration: /*#__PURE__*/React__default['default'].createElement(Illustration, {
          path: illustrationBlueImage
        }),
        clearLabel: null
      },
      'empty-filters': {
        displayLoader: false,
        title: 'No results found.',
        subtitle: 'We can’t find any item matching your filter selection.',
        illustration: /*#__PURE__*/React__default['default'].createElement(Illustration, {
          path: illustrationRedImage
        }),
        clearLabel: 'Clear filters'
      },
      'empty-search': {
        displayLoader: false,
        title: 'No results found.',
        subtitle: 'We can’t find any item matching your search query.',
        illustration: /*#__PURE__*/React__default['default'].createElement(Illustration, {
          path: illustrationRedImage
        }),
        clearLabel: 'Clear filters'
      }
    };
  }, [publicUrl]);
  var parts = functionMode ? {} : configurator[status];
  return _objectSpread(_objectSpread({}, defaultConfigurator[status]), parts);
}

var _StyledSection = _styled__default['default']("section").withConfig({
  displayName: "EmptyState___StyledSection",
  componentId: "sc-18fsc1i-0"
})(["display:flex;justify-content:center;align-items:center;"]);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "EmptyState___StyledDiv",
  componentId: "sc-18fsc1i-1"
})(["width:", "px;padding:", "px 0;text-align:center;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "EmptyState___StyledDiv2",
  componentId: "sc-18fsc1i-2"
})(["padding-bottom:", "px;"], function (p) {
  return p._css3;
});

var _StyledH = _styled__default['default']("h1").withConfig({
  displayName: "EmptyState___StyledH",
  componentId: "sc-18fsc1i-3"
})(["", ";display:flex;align-items:center;justify-content:center;"], function (p) {
  return p._css4;
});

var _StyledLoadingRing = _styled__default['default'](LoadingRing['default']).withConfig({
  displayName: "EmptyState___StyledLoadingRing",
  componentId: "sc-18fsc1i-4"
})(["margin-right:", "px;"], function (p) {
  return p._css5;
});

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "EmptyState___StyledDiv3",
  componentId: "sc-18fsc1i-5"
})(["color:", ";"], function (p) {
  return p._css6;
});

function EmptyState(_ref2) {
  var status = _ref2.status,
      configurator = _ref2.configurator,
      onStatusEmptyClear = _ref2.onStatusEmptyClear;
  var theme = Theme.useTheme();
  var functionMode = typeof configurator === 'function';
  var emptyState = useEmptyStateParts(status, configurator, functionMode);
  var emptyStateOverride = functionMode ? configurator(status) : null; // Returning an element from the function mode overrides everything.
  // If `null` or a non-element is returned, the default state is used instead.

  if ( /*#__PURE__*/React__default['default'].isValidElement(emptyStateOverride)) {
    return emptyStateOverride;
  }

  return /*#__PURE__*/React__default['default'].createElement(_StyledSection, null, /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    _css: 31 * constants.GU,
    _css2: 8 * constants.GU
  }, emptyState.illustration && /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css3: 2 * constants.GU
  }, emptyState.illustration), emptyState.title && /*#__PURE__*/React__default['default'].createElement(_StyledH, {
    _css4: textStyles.textStyle('title2')
  }, emptyState.displayLoader && /*#__PURE__*/React__default['default'].createElement(_StyledLoadingRing, {
    _css5: 1 * constants.GU
  }), emptyState.title), emptyState.subtitle && /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, {
    _css6: theme.surfaceContentSecondary
  }, emptyState.subtitle, ' ', emptyState.clearLabel && /*#__PURE__*/React__default['default'].createElement(Link['default'], {
    onClick: onStatusEmptyClear
  }, emptyState.clearLabel))));
}

EmptyState.propTypes = {
  status: index.propTypes.oneOf(['default', 'empty-filters', 'empty-search', 'loading']),
  configurator: index.propTypes.object,
  onStatusEmptyClear: index.propTypes.func
};

exports.default = EmptyState;
//# sourceMappingURL=EmptyState.js.map
