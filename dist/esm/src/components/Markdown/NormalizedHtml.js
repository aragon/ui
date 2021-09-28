import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS, GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

function NormalizedHtml({
  children,
  ...props
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    $_css: 2 * GU,
    $_css2: 3 * GU,
    $_css3: 0.5 * GU,
    $_css4: textStyle('title1'),
    $_css5: textStyle('title2'),
    $_css6: textStyle('title3'),
    $_css7: textStyle('title4'),
    $_css8: textStyle('body1'),
    $_css9: textStyle('body1'),
    $_css10: 2 * GU,
    $_css11: 0.5 * GU,
    $_css12: 1 * GU,
    $_css13: theme.border,
    $_css14: 2 * GU,
    $_css15: 0.5 * GU,
    $_css16: theme.border,
    $_css17: theme.contentSecondary,
    $_css18: theme.link,
    $_css19: 0.5 * GU,
    $_css20: 0.75 * GU,
    $_css21: theme.surfaceHighlight,
    $_css22: 2 * GU,
    $_css23: theme.border,
    $_css24: theme.border,
    $_css25: 1 * GU,
    $_css26: 2 * GU,
    $_css27: 2 * GU,
    $_css28: 4 * GU
  }), children);
}

NormalizedHtml.propTypes = {
  children: PropTypes.node.isRequired
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "NormalizedHtml___StyledDiv",
  componentId: "sc-9jrbs0-0"
})(["h1,h2,h3,h4,h5,h6{margin-bottom:", "px;margin-top:", "px;}h1,h2{padding-bottom:", "px;}h1{", ";}h2{", ";}h3{", ";}h4{", ";}h5{", ";}h6{", ";}p,pre,table,blockquote{margin:", "px 0;&:last-child{margin-bottom:0;}}li p{margin:0;}hr{height:", "px;margin:", "px 0;background:", ";border:0;}blockquote{padding:0 ", "px;border-left:", "px solid ", ";color:", ";}a{color:", ";text-decoration:underline;}pre,a > code,p > code{padding:", "px ", "px;background:", ";border-radius:", "px;}pre{overflow:auto;padding:", "px;border-radius:", "px;}table{border-collapse:collapse;}tr{border-top:1px solid ", ";}th,td{border:1px solid ", ";padding:", "px ", "px;}img{max-width:calc(100% - ", "px);}ul,ol{padding-left:", "px;}ol ol,ul ol{list-style-type:lower-roman;}ol ol ol,ol ul ol,ul ol ol,ul ul ol{list-style-type:lower-alpha;}button[role='checkbox']{position:relative;top:2px;}"], p => p.$_css, p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, p => p.$_css6, p => p.$_css7, p => p.$_css8, p => p.$_css9, p => p.$_css10, p => p.$_css11, p => p.$_css12, p => p.$_css13, p => p.$_css14, p => p.$_css15, p => p.$_css16, p => p.$_css17, p => p.$_css18, p => p.$_css19, p => p.$_css20, p => p.$_css21, RADIUS, p => p.$_css22, RADIUS, p => p.$_css23, p => p.$_css24, p => p.$_css25, p => p.$_css26, p => p.$_css27, p => p.$_css28);

export { NormalizedHtml as default };
//# sourceMappingURL=NormalizedHtml.js.map
