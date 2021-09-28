import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { useTheme } from '../../theme/Theme2.js';
import { RADIUS } from '../../style/constants.js';

function Link({
  onClick,
  href,
  external,
  ...props
}) {
  const theme = useTheme(); // `external` defaults to `true` if `href` is present, `false` otherwise.

  if (external === undefined) {
    external = Boolean(href);
  }

  return /*#__PURE__*/React.createElement(_StyledButtonBase, _extends({
    href: href,
    onClick: onClick,
    external: external,
    focusRingSpacing: [6, 2],
    focusRingRadius: RADIUS
  }, props, {
    $_css: theme.link,
    $_css2: external ? 'underline' : 'none'
  }));
}

Link.propTypes = { ...ButtonBaseWithFocus.propTypes,
  href: PropTypes.string,
  onClick: PropTypes.func,
  external: PropTypes.bool
};

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "Link___StyledButtonBase",
  componentId: "sc-57j27s-0"
})(["color:", ";text-decoration:", ";font-size:inherit;"], p => p.$_css, p => p.$_css2);

export { Link as default };
//# sourceMappingURL=Link.js.map
