import React$1 from 'react';
import _styled$1 from 'styled-components';
import { useTheme } from '../../theme/Theme2.js';
import IconEllipsis$1 from '../../icons/components/IconEllipsis.js';

var _StyledDiv = _styled$1("div").withConfig({
  displayName: "PaginationSeparator___StyledDiv",
  componentId: "f1pytl-0"
})(["display:flex;align-items:center;justify-content:center;"]);

var _StyledIconEllipsis = _styled$1(IconEllipsis$1).withConfig({
  displayName: "PaginationSeparator___StyledIconEllipsis",
  componentId: "f1pytl-1"
})(["color:", ";"], function (p) {
  return p._css;
});

var PaginationSeparator = /*#__PURE__*/React$1.memo(function PaginationSeparator() {
  var theme = useTheme();
  return /*#__PURE__*/React$1.createElement(_StyledDiv, null, /*#__PURE__*/React$1.createElement(_StyledIconEllipsis, {
    _css: theme.surfaceContentSecondary.alpha(0.4)
  }));
});

export { PaginationSeparator };
//# sourceMappingURL=PaginationSeparator.js.map
