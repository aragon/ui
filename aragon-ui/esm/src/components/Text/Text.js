import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { warnOnce } from '../../utils/environment.js';
import { font } from '../../utils/font.js';

var _StyledSpan = _styled("span").withConfig({
  displayName: "Text___StyledSpan",
  componentId: "yxw4o9-0"
})(["", ";", ";"], function (p) {
  return p._css;
}, function (p) {
  return p._css2;
});

function Text(_ref) {
  var children = _ref.children,
      color = _ref.color,
      deprecationNotice = _ref.deprecationNotice,
      monospace = _ref.monospace,
      size = _ref.size,
      smallcaps = _ref.smallcaps,
      weight = _ref.weight,
      props = objectWithoutProperties(_ref, ["children", "color", "deprecationNotice", "monospace", "size", "smallcaps", "weight"]);

  if (deprecationNotice) {
    warnOnce('Text', 'Text, Text.Block and Text.Paragraph are deprecated. ' + 'Please use the textStyle() utility function instead.');
  }

  return /*#__PURE__*/React.createElement(_StyledSpan, _extends_1({}, props, {
    _css: font({
      deprecationNotice: false,
      monospace: monospace,
      size: size,
      smallcaps: smallcaps,
      weight: weight
    }),
    _css2: color ? "color: ".concat(color) : ''
  }), children);
}

var Block = function Block(props) {
  return /*#__PURE__*/React.createElement(Text, _extends_1({
    as: "div"
  }, props));
};

var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/React.createElement(Text, _extends_1({
    as: "p"
  }, props));
};

Text.propTypes = Block.propTypes = Paragraph.propTypes = {
  children: propTypes.node,
  color: propTypes.string,
  deprecationNotice: propTypes.bool,
  monospace: propTypes.bool,
  size: propTypes.string,
  smallcaps: propTypes.bool,
  weight: propTypes.string
};
Text.defaultProps = {
  deprecationNotice: true
};
Text.Block = Block;
Text.Paragraph = Paragraph;

export default Text;
//# sourceMappingURL=Text.js.map
