import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS } from '../../style/constants.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "Link___StyledButtonBase",
  componentId: "sc-57j27s-0"
})(["color:", ";text-decoration:", ";font-size:inherit;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function Link(_ref) {
  var onClick = _ref.onClick,
      href = _ref.href,
      external = _ref.external,
      props = objectWithoutProperties(_ref, ["onClick", "href", "external"]);

  var theme = useTheme(); // `external` defaults to `true` if `href` is present, `false` otherwise.

  if (external === undefined) {
    external = Boolean(href);
  }

  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends_1({
    href: href,
    onClick: onClick,
    external: external,
    focusRingSpacing: [6, 2],
    focusRingRadius: RADIUS
  }, props, {
    _css: theme.link,
    _css2: external ? 'underline' : 'none'
  }));
}

Link.propTypes = _objectSpread(_objectSpread({}, ButtonBaseWithFocus.propTypes), {}, {
  href: propTypes.string,
  onClick: propTypes.func,
  external: propTypes.bool
});

export default Link;
//# sourceMappingURL=Link.js.map
