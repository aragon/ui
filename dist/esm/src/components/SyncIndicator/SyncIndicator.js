import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import FloatIndicator from '../FloatIndicator/FloatIndicator.js';
import LoadingRing from '../LoadingRing/LoadingRing.js';
import { GU } from '../../style/constants.js';

function SyncIndicator({
  children,
  label,
  shift,
  visible,
  ...props
}) {
  return /*#__PURE__*/React.createElement(FloatIndicator, _extends({
    visible: visible,
    shift: shift
  }, props), /*#__PURE__*/React.createElement(LoadingRing, null), /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css: 1.5 * GU
  }, children || /*#__PURE__*/React.createElement(_StyledSpan, null, label, " \uD83D\uDE4F")));
}

SyncIndicator.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
  shift: PropTypes.number,
  visible: PropTypes.bool
};
SyncIndicator.defaultProps = {
  label: 'Syncing data…'
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "SyncIndicator___StyledDiv",
  componentId: "sc-19m50aw-0"
})(["margin-left:", "px;"], p => p.$_css);

var _StyledSpan = _styled("span").withConfig({
  displayName: "SyncIndicator___StyledSpan",
  componentId: "sc-19m50aw-1"
})(["white-space:nowrap"]);

export { SyncIndicator as default };
//# sourceMappingURL=SyncIndicator.js.map
