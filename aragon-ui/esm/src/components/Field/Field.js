import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import _styled from 'styled-components';
import React, { useMemo } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useTheme } from '../../theme/Theme2.js';
import { unselectable } from '../../utils/css.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

// be used to link the <label> to a specific form element by using a render
// prop. See `children` in the Field documentation for more details.

var fieldId = 1;

var _StyledDiv = _styled("div").withConfig({
  displayName: "Field___StyledDiv",
  componentId: "uqte4v-0"
})(["margin-bottom:", "px;"], function (p) {
  return p._css;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Field___StyledDiv2",
  componentId: "uqte4v-1"
})(["display:flex;align-items:center;height:", "px;margin-bottom:", "px;color:", ";white-space:nowrap;", ";", ";"], function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
}, function (p) {
  return p._css4;
}, function (p) {
  return p._css5;
}, unselectable);

var _StyledSpan = _styled("span").withConfig({
  displayName: "Field___StyledSpan",
  componentId: "uqte4v-2"
})(["color:", ";"], function (p) {
  return p._css6;
});

function Field(_ref) {
  var children = _ref.children,
      label = _ref.label,
      required = _ref.required,
      props = objectWithoutProperties(_ref, ["children", "label", "required"]);

  var theme = useTheme();
  var isRequired = required || React.Children.toArray(children).some(function (_ref2) {
    var props = _ref2.props;
    return props && props.required;
  });
  var id = useMemo(function () {
    return typeof children === 'function' ? "Field_".concat(fieldId++) : null;
  }, [children]);
  var labelProps = id === null ? {} : {
    htmlFor: id
  };
  return /*#__PURE__*/React.createElement(i, {
    name: "Field"
  }, /*#__PURE__*/React.createElement(_StyledDiv, _extends_1({}, props, {
    _css: 3 * GU
  }), /*#__PURE__*/React.createElement("label", labelProps, /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css2: 2 * GU,
    _css3: 0.5 * GU,
    _css4: theme.surfaceContentSecondary,
    _css5: textStyle('label2')
  }, /*#__PURE__*/React.createElement(i, {
    name: "Field:label"
  }, label, isRequired && /*#__PURE__*/React.createElement(_StyledSpan, {
    title: "Required",
    _css6: theme.accent
  }, "\xA0*"))), /*#__PURE__*/React.createElement(i, {
    name: "Field:content"
  }, typeof children === 'function' ? children({
    id: id
  }) : children))));
}

Field.propTypes = {
  children: propTypes.oneOfType([propTypes.node, propTypes.func]),
  label: propTypes.node,
  required: propTypes.bool
};

export default Field;
//# sourceMappingURL=Field.js.map
