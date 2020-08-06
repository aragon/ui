import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import '../../utils/environment.js';
import { RADIUS } from '../../style/constants.js';
import { useTheme } from '../../theme/Theme2.js';
import IconDown$1 from '../../icons/components/IconDown.js';
import IconUp$1 from '../../icons/components/IconUp.js';
import ButtonIcon$1 from '../Button/ButtonIcon.js';

var _StyledButtonIcon = _styled$1(ButtonIcon$1).withConfig({
  displayName: "ToggleButton___StyledButtonIcon",
  componentId: "sc-1fkpeh6-0"
})(["display:flex;flex-direction:column;color:", ";& > div{display:flex;transform-origin:50% 50%;transition:transform 250ms ease-in-out;}"], function (p) {
  return p._css;
});

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "ToggleButton___StyledDiv",
  componentId: "sc-1fkpeh6-1"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv2 = _styled$1("div").withConfig({
  displayName: "ToggleButton___StyledDiv2",
  componentId: "sc-1fkpeh6-2"
})(["transform:rotate3d(", ",0,0,180deg);transform:rotate3d(0,0,", ",180deg);"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
});

function ToggleButton(_ref) {
  var onClick = _ref.onClick,
      opened = _ref.opened;
  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(_StyledButtonIcon, {
    label: opened ? 'Close' : 'Open',
    focusRingRadius: RADIUS,
    onClick: onClick,
    _css: theme.surfaceContentSecondary
  }, /*#__PURE__*/React$1.createElement(_StyledDiv, {
    _css2: opened ? 1 : 0,
    _css3: opened ? 1 : 0
  }, /*#__PURE__*/React$1.createElement(IconUp$1, {
    size: "small"
  })), /*#__PURE__*/React$1.createElement(_StyledDiv2, {
    _css4: opened ? -1 : 0,
    _css5: opened ? -1 : 0
  }, /*#__PURE__*/React$1.createElement(IconDown$1, {
    size: "small"
  })));
}

ToggleButton.propTypes = {
  onClick: propTypes.func.isRequired,
  opened: propTypes.bool.isRequired
};

export { ToggleButton };
//# sourceMappingURL=ToggleButton.js.map
