import './slicedToArray-4e274c67.js';
import './unsupportedIterableToArray-137e449b.js';
import React from 'react';
import './_commonjsHelpers-97e6d7b1.js';
import { P as PropTypes } from './index-097535f1.js';
import './toConsumableArray-127424c2.js';
import _styled from 'styled-components';
import './getPrototypeOf-b96da1e1.js';
import './color.js';
import './components.js';
import './contains-component.js';
import './css.js';
import './dayjs.min-e57fb69a.js';
import './date.js';
import './miscellaneous.js';
import { warnOnce } from './environment.js';
import { font } from './font.js';
import './math-e6d0e93a.js';
import './characters.js';
import './format.js';
import './keycodes.js';
import './url.js';
import './web3.js';
import { _ as _extends } from './extends-db4f0c26.js';
import { _ as _objectWithoutProperties } from './objectWithoutProperties-234758e1.js';

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
      props = _objectWithoutProperties(_ref, ["children", "color", "deprecationNotice", "monospace", "size", "smallcaps", "weight"]);

  if (deprecationNotice) {
    warnOnce('Text', 'Text, Text.Block and Text.Paragraph are deprecated. ' + 'Please use the textStyle() utility function instead.');
  }

  return /*#__PURE__*/React.createElement(_StyledSpan, _extends({}, props, {
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
  return /*#__PURE__*/React.createElement(Text, _extends({
    as: "div"
  }, props));
};

var Paragraph = function Paragraph(props) {
  return /*#__PURE__*/React.createElement(Text, _extends({
    as: "p"
  }, props));
};

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

export default Text;
//# sourceMappingURL=Text.js.map
