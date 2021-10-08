import slicedToArray from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import _styled from 'styled-components';
import React, { useRef, useState, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import DiscButton from '../DiscButton/DiscButton.js';
import Popover from '../Popover/Popover.js';
import { useTheme } from '../../theme/Theme2.js';
import IconQuestion from '../../icons/components/IconQuestion.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

var _StyledDiscButton = _styled(DiscButton).withConfig({
  displayName: "Help___StyledDiscButton",
  componentId: "sc-11d74sh-0"
})(["margin-top:", "px;margin-left:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledPopover = _styled(Popover).withConfig({
  displayName: "Help___StyledPopover",
  componentId: "sc-11d74sh-1"
})(["border:0;overflow:hidden;", ";"], function (p) {
  return p._css3;
});

var _StyledDiv = _styled("div").withConfig({
  displayName: "Help___StyledDiv",
  componentId: "sc-11d74sh-2"
})(["position:relative;max-width:", "px;min-width:", "px;padding:", "px;&:before{content:'';position:absolute;top:0;left:0;bottom:0;width:", "px;background:", ";}"], function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, function (p) {
  return p._css6;
}, function (p) {
  return p._css7;
}, function (p) {
  return p._css8;
});

function Help(_ref) {
  var hint = _ref.hint,
      children = _ref.children;
  var theme = useTheme();
  var buttonElement = useRef();

  var _useState = useState(false),
      _useState2 = slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var open = useCallback(function () {
    return setVisible(true);
  }, []);
  var close = useCallback(function () {
    return setVisible(false);
  }, []);

  var _useInside = o('Box:heading'),
      _useInside2 = slicedToArray(_useInside, 1),
      insideBoxHeading = _useInside2[0];

  var _useInside3 = o('Field:label'),
      _useInside4 = slicedToArray(_useInside3, 1),
      insideFieldLabel = _useInside4[0];

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_StyledDiscButton, {
    ref: buttonElement,
    description: hint,
    onClick: open,
    size: 2 * GU,
    _css: insideFieldLabel ? -3 : 0,
    _css2: insideBoxHeading || insideFieldLabel ? 1 * GU : 0
  }, /*#__PURE__*/React.createElement(IconQuestion, {
    size: "tiny"
  })), /*#__PURE__*/React.createElement(_StyledPopover, {
    opener: buttonElement.current,
    visible: visible,
    onClose: close,
    _css3: textStyle('body3')
  }, /*#__PURE__*/React.createElement(_StyledDiv, {
    _css4: 48 * GU,
    _css5: 20 * GU,
    _css6: 3 * GU,
    _css7: 0.5 * GU,
    _css8: theme.help
  }, children)));
}

Help.propTypes = {
  hint: propTypes.string.isRequired,
  children: propTypes.node.isRequired
};

export default Help;
//# sourceMappingURL=Help.js.map
