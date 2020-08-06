import React$1 from 'react';
import { warnOnce } from '../../utils/environment.js';
import { useTheme } from '../../theme/Theme2.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import Tag$1 from '../Tag/Tag.js';

function deprecationWarning() {
  warnOnce('Badge', '"Badge" and its variants have been deprecated. Please use "Tag" instead.');
}
/* eslint-disable react/prop-types */


function Badge(_ref) {
  var background = _ref.background,
      foreground = _ref.foreground,
      shape = _ref.shape,
      children = _ref.children,
      props = objectWithoutProperties$1(_ref, ["background", "foreground", "shape", "children"]);

  deprecationWarning();
  return /*#__PURE__*/React$1.createElement(Tag$1, _extends_1({
    background: background,
    color: foreground,
    size: shape === 'smalldisc' || shape === 'compact' ? 'small' : 'normal'
  }, props), children);
}

function BadgeNumber(_ref2) {
  var background = _ref2.background,
      children = _ref2.children,
      foreground = _ref2.foreground,
      label = _ref2.label,
      shape = _ref2.shape,
      small = _ref2.small,
      props = objectWithoutProperties$1(_ref2, ["background", "children", "foreground", "label", "shape", "small"]);

  deprecationWarning();

  if (!children && typeof label === 'number') {
    return /*#__PURE__*/React$1.createElement(Badge, _extends_1({
      limitDigits: true,
      background: background,
      color: foreground,
      label: label,
      size: small ? 'small' : 'normal'
    }, props));
  }

  return /*#__PURE__*/React$1.createElement(Tag$1, _extends_1({
    count: true,
    background: background,
    color: foreground
  }, props), children || label);
}

function BadgeInfo(props) {
  return /*#__PURE__*/React$1.createElement(BadgeNumber, props);
}

function BadgeIdentity(props) {
  return /*#__PURE__*/React$1.createElement(Badge, _extends_1({}, props, {
    uppercase: false
  }));
}

function BadgeApp(props) {
  return /*#__PURE__*/React$1.createElement(Badge, _extends_1({}, props, {
    mode: "identifier"
  }));
}

function BadgeNotification(props) {
  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(BadgeNumber, _extends_1({
    background: String(theme.positive),
    foreground: String(theme.positiveContent)
  }, props));
}
/* eslint-enable react/prop-types */


Badge.Info = BadgeInfo;
Badge.Notification = BadgeNotification;
Badge.Identity = BadgeIdentity;
Badge.App = BadgeApp;

export default Badge;
export { BadgeNumber };
//# sourceMappingURL=Badge.js.map
