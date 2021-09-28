import _styled from 'styled-components';
import React, { useMemo } from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import LoadingRing from '../LoadingRing/LoadingRing.js';
import Link from '../Link/Link.js';
import illustrationRedImage from './assets/empty-state-illustration-red.png.js';
import illustrationBlueImage from './assets/empty-state-illustration-blue.png.js';
import { useTheme } from '../../theme/Theme2.js';
import { usePublicUrl } from '../../providers/PublicUrl/PublicUrl.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

function useEmptyStateParts(status, configurator, functionMode) {
  const publicUrl = usePublicUrl();
  const defaultConfigurator = useMemo(() => {
    // eslint-disable-next-line react/prop-types
    const Illustration = ({
      path
    }) => /*#__PURE__*/React.createElement("img", {
      src: publicUrl + path,
      alt: "",
      height: 20 * GU
    });

    return {
      default: {
        displayLoader: false,
        title: 'No data available.',
        subtitle: null,
        illustration: /*#__PURE__*/React.createElement(Illustration, {
          path: illustrationBlueImage
        }),
        clearLabel: null
      },
      loading: {
        displayLoader: true,
        title: 'Loading data…',
        subtitle: null,
        illustration: /*#__PURE__*/React.createElement(Illustration, {
          path: illustrationBlueImage
        }),
        clearLabel: null
      },
      'empty-filters': {
        displayLoader: false,
        title: 'No results found.',
        subtitle: 'We can’t find any item matching your filter selection.',
        illustration: /*#__PURE__*/React.createElement(Illustration, {
          path: illustrationRedImage
        }),
        clearLabel: 'Clear filters'
      },
      'empty-search': {
        displayLoader: false,
        title: 'No results found.',
        subtitle: 'We can’t find any item matching your search query.',
        illustration: /*#__PURE__*/React.createElement(Illustration, {
          path: illustrationRedImage
        }),
        clearLabel: 'Clear filters'
      }
    };
  }, [publicUrl]);
  const parts = functionMode ? {} : configurator[status];
  return { ...defaultConfigurator[status],
    ...parts
  };
}

function EmptyState({
  status,
  configurator,
  onStatusEmptyClear
}) {
  const theme = useTheme();
  const functionMode = typeof configurator === 'function';
  const emptyState = useEmptyStateParts(status, configurator, functionMode);
  const emptyStateOverride = functionMode ? configurator(status) : null; // Returning an element from the function mode overrides everything.
  // If `null` or a non-element is returned, the default state is used instead.

  if ( /*#__PURE__*/React.isValidElement(emptyStateOverride)) {
    return emptyStateOverride;
  }

  return /*#__PURE__*/React.createElement(_StyledSection, null, /*#__PURE__*/React.createElement(_StyledDiv, {
    $_css: 31 * GU,
    $_css2: 8 * GU
  }, emptyState.illustration && /*#__PURE__*/React.createElement(_StyledDiv2, {
    $_css3: 2 * GU
  }, emptyState.illustration), emptyState.title && /*#__PURE__*/React.createElement(_StyledH, {
    $_css4: textStyle('title2')
  }, emptyState.displayLoader && /*#__PURE__*/React.createElement(_StyledLoadingRing, {
    $_css5: 1 * GU
  }), emptyState.title), emptyState.subtitle && /*#__PURE__*/React.createElement(_StyledDiv3, {
    $_css6: theme.surfaceContentSecondary
  }, emptyState.subtitle, ' ', emptyState.clearLabel && /*#__PURE__*/React.createElement(Link, {
    onClick: onStatusEmptyClear
  }, emptyState.clearLabel))));
}

EmptyState.propTypes = {
  status: PropTypes.oneOf(['default', 'empty-filters', 'empty-search', 'loading']),
  configurator: PropTypes.object,
  onStatusEmptyClear: PropTypes.func
};

var _StyledSection = _styled("section").withConfig({
  displayName: "EmptyState___StyledSection",
  componentId: "sc-18fsc1i-0"
})(["display:flex;justify-content:center;align-items:center;"]);

var _StyledDiv = _styled("div").withConfig({
  displayName: "EmptyState___StyledDiv",
  componentId: "sc-18fsc1i-1"
})(["width:", "px;padding:", "px 0;text-align:center;"], p => p.$_css, p => p.$_css2);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "EmptyState___StyledDiv2",
  componentId: "sc-18fsc1i-2"
})(["padding-bottom:", "px;"], p => p.$_css3);

var _StyledH = _styled("h1").withConfig({
  displayName: "EmptyState___StyledH",
  componentId: "sc-18fsc1i-3"
})(["", ";display:flex;align-items:center;justify-content:center;"], p => p.$_css4);

var _StyledLoadingRing = _styled(LoadingRing).withConfig({
  displayName: "EmptyState___StyledLoadingRing",
  componentId: "sc-18fsc1i-4"
})(["margin-right:", "px;"], p => p.$_css5);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "EmptyState___StyledDiv3",
  componentId: "sc-18fsc1i-5"
})(["color:", ";"], p => p.$_css6);

export { EmptyState as default };
//# sourceMappingURL=EmptyState.js.map
