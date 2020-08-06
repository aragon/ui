import slicedToArray$1 from '../../../node_modules/@babel/runtime/helpers/slicedToArray.js';
import React$1, { useRef, useState, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import _styled$1 from 'styled-components';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme2.js';
import { useInside as o } from '../../../node_modules/use-inside/dist/index.js';
import IconQuestion$1 from '../../icons/components/IconQuestion.js';
import Popover$1 from '../Popover/Popover.js';
import DiscButton$1 from '../DiscButton/DiscButton.js';

var _StyledDiscButton = _styled$1(DiscButton$1).withConfig({
  displayName: "Help___StyledDiscButton",
  componentId: "sc-11d74sh-0"
})(["margin-top:", "px;margin-left:", "px;"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

var _StyledPopover = _styled$1(Popover$1).withConfig({
  displayName: "Help___StyledPopover",
  componentId: "sc-11d74sh-1"
})(["border:0;overflow:hidden;", ";"], function (p) {
  return p._css3;
});

var _StyledDiv = _styled$1("div").withConfig({
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
      _useState2 = slicedToArray$1(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var open = useCallback(function () {
    return setVisible(true);
  }, []);
  var close = useCallback(function () {
    return setVisible(false);
  }, []);

  var _useInside = o('Box:heading'),
      _useInside2 = slicedToArray$1(_useInside, 1),
      insideBoxHeading = _useInside2[0];

  var _useInside3 = o('Field:label'),
      _useInside4 = slicedToArray$1(_useInside3, 1),
      insideFieldLabel = _useInside4[0];

  return /*#__PURE__*/React$1.createElement(React$1.Fragment, null, /*#__PURE__*/React$1.createElement(_StyledDiscButton, {
    ref: buttonElement,
    description: hint,
    onClick: open,
    size: 2 * GU,
    _css: insideFieldLabel ? -3 : 0,
    _css2: insideBoxHeading || insideFieldLabel ? 1 * GU : 0
  }, /*#__PURE__*/React$1.createElement(IconQuestion$1, {
    size: "tiny"
  })), /*#__PURE__*/React$1.createElement(_StyledPopover, {
    opener: buttonElement.current,
    visible: visible,
    onClose: close,
    _css3: textStyle('body3')
  }, /*#__PURE__*/React$1.createElement(_StyledDiv, {
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
