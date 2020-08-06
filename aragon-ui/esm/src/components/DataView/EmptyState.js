import React$1, { useMemo } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled$1 from 'styled-components';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme2.js';
import { usePublicUrl } from '../../providers/PublicUrl/PublicUrl.js';
import LoadingRing$1 from '../LoadingRing/LoadingRing.js';
import Link$1 from '../Link/Link.js';
import illustrationRedImage from './assets/empty-state-illustration-red.png.js';
import illustrationBlueImage from './assets/empty-state-illustration-blue.png.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useEmptyStateParts(status, configurator, functionMode) {
  var publicUrl = usePublicUrl();
  var defaultConfigurator = useMemo(function () {
    // eslint-disable-next-line react/prop-types
    var Illustration = function Illustration(_ref) {
      var path = _ref.path;
      return /*#__PURE__*/React$1.createElement("img", {
        src: publicUrl + path,
        alt: "",
        height: 20 * GU
      });
    };

    return {
      default: {
        displayLoader: false,
        title: 'No data available.',
        subtitle: null,
        illustration: /*#__PURE__*/React$1.createElement(Illustration, {
          path: illustrationBlueImage
        }),
        clearLabel: null
      },
      loading: {
        displayLoader: true,
        title: 'Loading data…',
        subtitle: null,
        illustration: /*#__PURE__*/React$1.createElement(Illustration, {
          path: illustrationBlueImage
        }),
        clearLabel: null
      },
      'empty-filters': {
        displayLoader: false,
        title: 'No results found.',
        subtitle: 'We can’t find any item matching your filter selection.',
        illustration: /*#__PURE__*/React$1.createElement(Illustration, {
          path: illustrationRedImage
        }),
        clearLabel: 'Clear filters'
      },
      'empty-search': {
        displayLoader: false,
        title: 'No results found.',
        subtitle: 'We can’t find any item matching your search query.',
        illustration: /*#__PURE__*/React$1.createElement(Illustration, {
          path: illustrationRedImage
        }),
        clearLabel: 'Clear filters'
      }
    };
  }, [publicUrl]);
  var parts = functionMode ? {} : configurator[status];
  return _objectSpread(_objectSpread({}, defaultConfigurator[status]), parts);
}

var _StyledSection = _styled$1("section").withConfig({
  displayName: "EmptyState___StyledSection",
  componentId: "sc-18fsc1i-0"
})(["display:flex;justify-content:center;align-items:center;"]);

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "EmptyState___StyledDiv",
  componentId: "sc-18fsc1i-1"
})(["width:", "px;padding:", "px 0;text-align:center;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledDiv2 = _styled$1("div").withConfig({
  displayName: "EmptyState___StyledDiv2",
  componentId: "sc-18fsc1i-2"
})(["padding-bottom:", "px;"], function (p) {
  return p._css3;
});

var _StyledH = _styled$1("h1").withConfig({
  displayName: "EmptyState___StyledH",
  componentId: "sc-18fsc1i-3"
})(["", ";display:flex;align-items:center;justify-content:center;"], function (p) {
  return p._css4;
});

var _StyledLoadingRing = _styled$1(LoadingRing$1).withConfig({
  displayName: "EmptyState___StyledLoadingRing",
  componentId: "sc-18fsc1i-4"
})(["margin-right:", "px;"], function (p) {
  return p._css5;
});

var _StyledDiv3 = _styled$1("div").withConfig({
  displayName: "EmptyState___StyledDiv3",
  componentId: "sc-18fsc1i-5"
})(["color:", ";"], function (p) {
  return p._css6;
});

function EmptyState(_ref2) {
  var status = _ref2.status,
      configurator = _ref2.configurator,
      onStatusEmptyClear = _ref2.onStatusEmptyClear;
  var theme = useTheme();
  var functionMode = typeof configurator === 'function';
  var emptyState = useEmptyStateParts(status, configurator, functionMode);
  var emptyStateOverride = functionMode ? configurator(status) : null; // Returning an element from the function mode overrides everything.
  // If `null` or a non-element is returned, the default state is used instead.

  if ( /*#__PURE__*/React$1.isValidElement(emptyStateOverride)) {
    return emptyStateOverride;
  }

  return /*#__PURE__*/React$1.createElement(_StyledSection, null, /*#__PURE__*/React$1.createElement(_StyledDiv, {
    _css: 31 * GU,
    _css2: 8 * GU
  }, emptyState.illustration && /*#__PURE__*/React$1.createElement(_StyledDiv2, {
    _css3: 2 * GU
  }, emptyState.illustration), emptyState.title && /*#__PURE__*/React$1.createElement(_StyledH, {
    _css4: textStyle('title2')
  }, emptyState.displayLoader && /*#__PURE__*/React$1.createElement(_StyledLoadingRing, {
    _css5: 1 * GU
  }), emptyState.title), emptyState.subtitle && /*#__PURE__*/React$1.createElement(_StyledDiv3, {
    _css6: theme.surfaceContentSecondary
  }, emptyState.subtitle, ' ', emptyState.clearLabel && /*#__PURE__*/React$1.createElement(Link$1, {
    onClick: onStatusEmptyClear
  }, emptyState.clearLabel))));
}

EmptyState.propTypes = {
  status: propTypes.oneOf(['default', 'empty-filters', 'empty-search', 'loading']),
  configurator: propTypes.object,
  onStatusEmptyClear: propTypes.func
};

export default EmptyState;
//# sourceMappingURL=EmptyState.js.map
