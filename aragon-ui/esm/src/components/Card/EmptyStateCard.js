import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import Card from './Card.js';
import illustrationDefault from './assets/empty-state-card-illustration-default.png.js';
import { useTheme } from '../../theme/Theme2.js';
import { usePublicUrl } from '../../providers/PublicUrl/PublicUrl.js';
import { warnOnce } from '../../utils/environment.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

var _StyledCard = _styled(Card).withConfig({
  displayName: "EmptyStateCard___StyledCard",
  componentId: "ov2yly-0"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:", "px 1fr auto;height:", "px;padding:", "px;text-align:center;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "EmptyStateCard___StyledDiv",
  componentId: "ov2yly-1"
})(["display:flex;justify-content:center;overflow:hidden;"]);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "EmptyStateCard___StyledDiv2",
  componentId: "ov2yly-2"
})(["color:", ";", ";"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var EmptyStateCard = /*#__PURE__*/React.memo(function EmptyStateCard(_ref) {
  var action = _ref.action,
      icon = _ref.icon,
      illustration = _ref.illustration,
      text = _ref.text,
      props = objectWithoutProperties(_ref, ["action", "icon", "illustration", "text"]);

  var theme = useTheme();
  var publicUrl = usePublicUrl();

  if (icon !== undefined) {
    warnOnce('EmptyStateCard:icon', 'EmptyStateCard: the `icon` prop is deprecated, please use `illustration` instead.');

    if (illustration === undefined) {
      illustration = icon;
    }
  } // default illustration


  if (!illustration) {
    illustration = /*#__PURE__*/React.createElement("img", {
      src: publicUrl + illustrationDefault,
      alt: "",
      height: 20 * GU
    });
  }

  return /*#__PURE__*/React.createElement(i, {
    name: "EmptyStateCard"
  }, /*#__PURE__*/React.createElement(_StyledCard, _extends_1({}, props, {
    _css: 20 * GU,
    _css2: 42 * GU,
    _css3: 2 * GU
  }), /*#__PURE__*/React.createElement(_StyledDiv, null, illustration), /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css4: theme.surfaceContent,
    _css5: textStyle('title4')
  }, text), /*#__PURE__*/React.createElement("div", null, action)));
});
EmptyStateCard.propTypes = {
  action: propTypes.node,
  illustration: propTypes.node,
  text: propTypes.node.isRequired,
  // deprecated
  icon: propTypes.node
};

export default EmptyStateCard;
//# sourceMappingURL=EmptyStateCard.js.map
