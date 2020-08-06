import React$1 from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import '../../utils/environment.js';
import { GU } from '../../style/constants.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties$1 from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import LoadingRing$1 from '../LoadingRing/LoadingRing.js';
import FloatIndicator$1 from '../FloatIndicator/FloatIndicator.js';

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "SyncIndicator___StyledDiv",
  componentId: "sc-19m50aw-0"
})(["margin-left:", "px;"], function (p) {
  return p._css;
});

var _StyledSpan = _styled$1("span").withConfig({
  displayName: "SyncIndicator___StyledSpan",
  componentId: "sc-19m50aw-1"
})(["white-space:nowrap"]);

function SyncIndicator(_ref) {
  var children = _ref.children,
      label = _ref.label,
      shift = _ref.shift,
      visible = _ref.visible,
      props = objectWithoutProperties$1(_ref, ["children", "label", "shift", "visible"]);

  return /*#__PURE__*/React$1.createElement(FloatIndicator$1, _extends_1({
    visible: visible,
    shift: shift
  }, props), /*#__PURE__*/React$1.createElement(LoadingRing$1, null), /*#__PURE__*/React$1.createElement(_StyledDiv, {
    _css: 1.5 * GU
  }, children || /*#__PURE__*/React$1.createElement(_StyledSpan, null, label, " \uD83D\uDE4F")));
}

SyncIndicator.propTypes = {
  children: propTypes.node,
  label: propTypes.node,
  shift: propTypes.number,
  visible: propTypes.bool
};
SyncIndicator.defaultProps = {
  label: 'Syncing data…'
};

export default SyncIndicator;
//# sourceMappingURL=SyncIndicator.js.map
