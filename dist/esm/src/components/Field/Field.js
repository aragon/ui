import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useMemo } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import { useTheme } from '../../theme/Theme2.js';
import { unselectable } from '../../utils/css.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

// be used to link the <label> to a specific form element by using a render
// prop. See `children` in the Field documentation for more details.

let fieldId = 1;

function Field({
  children,
  label,
  required,
  ...props
}) {
  const theme = useTheme();
  const isRequired = required || React.Children.toArray(children).some(({
    props
  }) => props && props.required);
  const id = useMemo(() => typeof children === 'function' ? `Field_${fieldId++}` : null, [children]);
  const labelProps = id === null ? {} : {
    htmlFor: id
  };
  return /*#__PURE__*/React.createElement(i, {
    name: "Field"
  }, /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    $_css: 3 * GU
  }), /*#__PURE__*/React.createElement("label", labelProps, /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css2: 2 * GU,
    $_css3: 0.5 * GU,
    $_css4: theme.surfaceContentSecondary,
    $_css5: textStyle('label2')
  }, /*#__PURE__*/React.createElement(i, {
    name: "Field:label"
  }, label, isRequired && /*#__PURE__*/React.createElement(_StyledSpan, {
    title: "Required",
    $_css6: theme.accent
  }, '\u00a0*'))), /*#__PURE__*/React.createElement(i, {
    name: "Field:content"
  }, typeof children === 'function' ? children({
    id
  }) : children))));
}

Field.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  label: PropTypes.node,
  required: PropTypes.bool
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "Field___StyledDiv",
  componentId: "sc-uqte4v-0"
})(["margin-bottom:", "px;"], p => p.$_css);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "Field___StyledDiv2",
  componentId: "sc-uqte4v-1"
})(["display:flex;align-items:center;height:", "px;margin-bottom:", "px;color:", ";white-space:nowrap;", ";", ";"], p => p.$_css2, p => p.$_css3, p => p.$_css4, p => p.$_css5, unselectable);

var _StyledSpan = _styled("span").withConfig({
  displayName: "Field___StyledSpan",
  componentId: "sc-uqte4v-2"
})(["color:", ";"], p => p.$_css6);

export { Field as default };
//# sourceMappingURL=Field.js.map
