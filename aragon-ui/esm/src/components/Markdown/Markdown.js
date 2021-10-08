import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import Markdown$1 from '../../../node_modules/markdown-to-jsx/dist/esm.js';
import CheckBoxWithTheme from '../Input/Checkbox.js';
import Link from '../Link/Link.js';
import NormalizedHtml from './NormalizedHtml.js';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function CustomInput(props) {
  props = _objectSpread({}, props);

  if (props.type === 'checkbox') {
    delete props.type;
    return /*#__PURE__*/React.createElement(CheckBoxWithTheme, props);
  }

  return /*#__PURE__*/React.createElement("input", props);
}

CustomInput.propTypes = {
  type: propTypes.string
};

function Markdown(_ref) {
  var allowHtml = _ref.allowHtml,
      className = _ref.className,
      content = _ref.content,
      markdownToJsxOptions = _ref.markdownToJsxOptions,
      normalized = _ref.normalized,
      style = _ref.style;
      objectWithoutProperties(_ref, ["allowHtml", "className", "content", "markdownToJsxOptions", "normalized", "style"]);

  var markdownToJsxOptionsBase = {
    disableParsingRawHTML: !allowHtml,
    overrides: {
      a: Link,
      input: CustomInput
    }
  };
  var markdown = /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(Markdown$1, {
    options: markdownToJsxOptions ? markdownToJsxOptions(markdownToJsxOptionsBase) : markdownToJsxOptionsBase
  }, content));
  return normalized ? /*#__PURE__*/React.createElement(NormalizedHtml, null, markdown) : markdown;
}

Markdown.propTypes = {
  allowHtml: propTypes.bool,
  className: propTypes.string,
  content: propTypes.string.isRequired,
  markdownToJsxOptions: propTypes.func,
  normalized: propTypes.bool,
  style: propTypes.object
};
Markdown.defaultProps = {
  normalized: false
};

export default Markdown;
//# sourceMappingURL=Markdown.js.map
