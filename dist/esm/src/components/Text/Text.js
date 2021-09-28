import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { warnOnce } from '../../utils/environment.js';
import { font } from '../../utils/font.js';

function Text({
  children,
  color,
  deprecationNotice,
  monospace,
  size,
  smallcaps,
  weight,
  ...props
}) {
  if (deprecationNotice) {
    warnOnce('Text', 'Text, Text.Block and Text.Paragraph are deprecated. ' + 'Please use the textStyle() utility function instead.');
  }

  return /*#__PURE__*/React.createElement(_StyledSpan, _extends({}, props, {
    $_css: font({
      deprecationNotice: false,
      monospace,
      size,
      smallcaps,
      weight
    }),
    $_css2: color ? `color: ${color}` : ''
  }), children);
}

const Block = props => /*#__PURE__*/React.createElement(Text, _extends({
  as: "div"
}, props));

const Paragraph = props => /*#__PURE__*/React.createElement(Text, _extends({
  as: "p"
}, props));

Text.propTypes = Block.propTypes = Paragraph.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  deprecationNotice: PropTypes.bool,
  monospace: PropTypes.bool,
  size: PropTypes.string,
  smallcaps: PropTypes.bool,
  weight: PropTypes.string
};
Text.defaultProps = {
  deprecationNotice: true
};
Text.Block = Block;
Text.Paragraph = Paragraph;

var _StyledSpan = _styled("span").withConfig({
  displayName: "Text___StyledSpan",
  componentId: "sc-yxw4o9-0"
})(["", ";", ";"], p => p.$_css, p => p.$_css2);

export { Text as default };
//# sourceMappingURL=Text.js.map
