import slicedToArray$1 from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React$1, { useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import { RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme2.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';

var _StyledLi = _styled$1("li").withConfig({
  displayName: "Tab___StyledLi",
  componentId: "sc-1cgzd3b-0"
})(["list-style:none"]);

var _StyledButtonBase = _styled$1(ButtonBaseWithFocus).withConfig({
  displayName: "Tab___StyledButtonBase",
  componentId: "sc-1cgzd3b-1"
})(["", ";border-radius:0;transition:background 50ms ease-in-out;&:active{background:", ";}"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledSpan = _styled$1("span").withConfig({
  displayName: "Tab___StyledSpan",
  componentId: "sc-1cgzd3b-2"
})(["display:flex;position:relative;align-items:center;height:", "px;padding:0 ", "px;white-space:nowrap;color:", ";"], function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

var _StyledSpan2 = _styled$1("span").withConfig({
  displayName: "Tab___StyledSpan2",
  componentId: "sc-1cgzd3b-3"
})(["position:absolute;left:0;right:0;bottom:0;background:", ";height:2px;opacity:", ";transition-property:transform,opacity;transition-duration:150ms;transition-timing-function:ease-in-out;transform:scale3d(1,", ",1);transform-origin:0 100%;"], function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Tab(_ref) {
  var index = _ref.index,
      item = _ref.item,
      selected = _ref.selected,
      onChange = _ref.onChange;
  var theme = useTheme();

  var _useInside = o('SidePanel'),
      _useInside2 = slicedToArray$1(_useInside, 1),
      insideSidePanel = _useInside2[0];

  var handleClick = useCallback(function () {
    onChange(index);
  }, [index, onChange]);
  return /*#__PURE__*/React$1.createElement(_StyledLi, null, /*#__PURE__*/React$1.createElement(_StyledButtonBase, {
    focusRingRadius: RADIUS,
    onClick: handleClick,
    _css: textStyle('body2'),
    _css2: theme.surfacePressed
  }, /*#__PURE__*/React$1.createElement(_StyledSpan, {
    _css3: 8 * GU - (insideSidePanel ? 1 : 2),
    _css4: 3 * GU,
    _css5: selected ? theme.surfaceContent : theme.surfaceContentSecondary
  }, item, /*#__PURE__*/React$1.createElement(_StyledSpan2, {
    _css6: theme.selected,
    _css7: Number(selected),
    _css8: Number(selected)
  }))));
}

Tab.propTypes = {
  index: propTypes.number.isRequired,
  item: propTypes.node.isRequired,
  onChange: propTypes.func.isRequired,
  selected: propTypes.bool.isRequired
};

export default Tab;
//# sourceMappingURL=Tab.js.map
