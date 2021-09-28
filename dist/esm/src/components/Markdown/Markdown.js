import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import Markdown$1 from '../../../node_modules/markdown-to-jsx/dist/esm.js';
import CheckBoxWithTheme from '../Input/Checkbox.js';
import Link from '../Link/Link.js';
import NormalizedHtml from './NormalizedHtml.js';

function CustomInput(props) {
  props = { ...props
  };

  if (props.type === 'checkbox') {
    delete props.type;
    return /*#__PURE__*/React.createElement(CheckBoxWithTheme, props);
  }

  return /*#__PURE__*/React.createElement("input", props);
}

CustomInput.propTypes = {
  type: PropTypes.string
};

function Markdown({
  allowHtml,
  className,
  content,
  markdownToJsxOptions,
  normalized,
  style,
  ...props
}) {
  const markdownToJsxOptionsBase = {
    disableParsingRawHTML: !allowHtml,
    overrides: {
      a: Link,
      input: CustomInput
    }
  };
  const markdown = /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(Markdown$1, {
    options: markdownToJsxOptions ? markdownToJsxOptions(markdownToJsxOptionsBase) : markdownToJsxOptionsBase
  }, content));
  return normalized ? /*#__PURE__*/React.createElement(NormalizedHtml, null, markdown) : markdown;
}

Markdown.propTypes = {
  allowHtml: PropTypes.bool,
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
  markdownToJsxOptions: PropTypes.func,
  normalized: PropTypes.bool,
  style: PropTypes.object
};
Markdown.defaultProps = {
  normalized: false
};

export { Markdown as default };
//# sourceMappingURL=Markdown.js.map
