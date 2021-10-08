import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import React from 'react';
import Tag from '../Tag/Tag.js';
import { warnOnce } from '../../utils/environment.js';
import { useTheme } from '../../theme/Theme2.js';

function deprecationWarning() {
  warnOnce('Badge', '"Badge" and its variants have been deprecated. Please use "Tag" instead.');
}
/* eslint-disable react/prop-types */


function Badge(_ref) {
  var background = _ref.background,
      foreground = _ref.foreground,
      shape = _ref.shape,
      children = _ref.children,
      props = objectWithoutProperties(_ref, ["background", "foreground", "shape", "children"]);

  deprecationWarning();
  return /*#__PURE__*/React.createElement(Tag, _extends_1({
    background: background,
    color: foreground,
    size: shape === 'smalldisc' || shape === 'compact' ? 'small' : 'normal'
  }, props), children);
}

function BadgeNumber(_ref2) {
  var background = _ref2.background,
      children = _ref2.children,
      foreground = _ref2.foreground,
      label = _ref2.label;
      _ref2.shape;
      var small = _ref2.small,
      props = objectWithoutProperties(_ref2, ["background", "children", "foreground", "label", "shape", "small"]);

  deprecationWarning();

  if (!children && typeof label === 'number') {
    return /*#__PURE__*/React.createElement(Badge, _extends_1({
      limitDigits: true,
      background: background,
      color: foreground,
      label: label,
      size: small ? 'small' : 'normal'
    }, props));
  }

  return /*#__PURE__*/React.createElement(Tag, _extends_1({
    count: true,
    background: background,
    color: foreground
  }, props), children || label);
}

function BadgeInfo(props) {
  return /*#__PURE__*/React.createElement(BadgeNumber, props);
}

function BadgeIdentity(props) {
  return /*#__PURE__*/React.createElement(Badge, _extends_1({}, props, {
    uppercase: false
  }));
}

function BadgeApp(props) {
  return /*#__PURE__*/React.createElement(Badge, _extends_1({}, props, {
    mode: "identifier"
  }));
}

function BadgeNotification(props) {
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(BadgeNumber, _extends_1({
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
