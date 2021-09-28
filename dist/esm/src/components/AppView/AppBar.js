import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled, { css } from 'styled-components';
import React from 'react';
import PropTypes from '../../../node_modules/prop-types/index.js';
import { Transition, animated as extendedAnimated } from '../../../node_modules/react-spring/web.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import Text from '../Text/Text.js';
import chevronSvg from './assets/chevron.svg.js';
import { useTheme } from '../../theme/Theme2.js';
import { unselectable } from '../../utils/css.js';
import { springs } from '../../style/springs.js';
import { noop } from '../../utils/miscellaneous.js';
import { PublicUrl } from '../../providers/PublicUrl/PublicUrl.js';

const BAR_HEIGHT = 64;

class AppBar extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      tabsHeight: 0
    });

    _defineProperty(this, "_tabsRef", /*#__PURE__*/React.createRef());
  }

  componentDidMount() {
    this.updateTabsHeight();
  }

  componentDidUpdate(prevProps) {
    if (Boolean(prevProps.tabs) !== Boolean(this.props.tabs)) {
      this.updateTabsHeight();
    }
  }

  updateTabsHeight() {
    const el = this._tabsRef.current;

    if (el) {
      this.setState({
        tabsHeight: el.clientHeight
      });
    }
  }

  render() {
    const {
      tabsHeight
    } = this.state;
    const {
      children,
      endContent,
      onTitleClick,
      padding,
      tabs,
      title,
      theme,
      ...props
    } = this.props;
    return /*#__PURE__*/React.createElement(i, {
      name: "AppBar"
    }, /*#__PURE__*/React.createElement(_StyledDiv, {
      $_css: theme.surface,
      $_css2: unselectable(),
      $_css3: theme.border
    }, /*#__PURE__*/React.createElement(_StyledDiv2, _extends({}, props, {
      $_css4: BAR_HEIGHT - 1
    }), title && /*#__PURE__*/React.createElement(_StyledDiv3, {
      $_css5: padding
    }, /*#__PURE__*/React.createElement(AppBarTitle, {
      chevron: Boolean(children),
      clickable: Boolean(onTitleClick),
      onClick: onTitleClick
    }, typeof title === 'string' ? /*#__PURE__*/React.createElement(Text, {
      size: "xxlarge",
      deprecationNotice: false
    }, title) : title)), children, endContent && /*#__PURE__*/React.createElement(_StyledDiv4, {
      $_css6: padding
    }, endContent)), /*#__PURE__*/React.createElement(Transition, {
      items: tabs,
      from: {
        opacity: 0,
        height: 0
      },
      enter: {
        opacity: 1,
        height: tabsHeight || 'auto'
      },
      leave: {
        opacity: 0,
        height: 0
      },
      initial: null,
      config: springs.smooth,
      native: true
    }, tabs => tabs && (styles => /*#__PURE__*/React.createElement(TabsWrapper, {
      style: styles
    }, /*#__PURE__*/React.createElement("div", {
      ref: this._tabsRef
    }, tabs))))));
  }

}

_defineProperty(AppBar, "propTypes", {
  children: PropTypes.node,
  endContent: PropTypes.node,
  onTitleClick: PropTypes.func,
  padding: PropTypes.number,
  tabs: PropTypes.element,
  theme: PropTypes.object,
  title: PropTypes.node
});

_defineProperty(AppBar, "defaultProps", {
  onTitleClick: noop,
  padding: 30,
  title: ''
});

const AppBarTitle = PublicUrl.hocWrap(_styled.h1.withConfig({
  displayName: "AppBar__AppBarTitle",
  componentId: "sc-11q0awo-0"
})(["padding-right:20px;margin-right:calc(20px - 7px);white-space:nowrap;background-image:", ";background-position:100% 50%;background-repeat:no-repeat;cursor:", ";"], ({
  chevron
}) => chevron ? css(["url(", ")"], PublicUrl.styledUrl(chevronSvg)) : 'none', ({
  clickable
}) => clickable ? 'pointer' : 'default'));
const TabsWrapper = _styled(extendedAnimated.div).withConfig({
  displayName: "AppBar__TabsWrapper",
  componentId: "sc-11q0awo-1"
})(["position:relative;z-index:1;"]);
function AppBar$1 (props) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(AppBar, _extends({}, props, {
    theme: theme
  }));
}

var _StyledDiv = _styled("div").withConfig({
  displayName: "AppBar___StyledDiv",
  componentId: "sc-11q0awo-2"
})(["overflow:hidden;display:flex;flex-direction:column;width:100%;min-height:", "px;background:", ";", ";padding-bottom:1px;&:after{content:'';position:absolute;left:0;right:0;bottom:0;border-bottom:1px solid ", ";}"], BAR_HEIGHT, p => p.$_css, p => p.$_css2, p => p.$_css3);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "AppBar___StyledDiv2",
  componentId: "sc-11q0awo-3"
})(["display:flex;align-items:center;justify-content:flex-start;width:100%;height:", "px;"], p => p.$_css4);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "AppBar___StyledDiv3",
  componentId: "sc-11q0awo-4"
})(["display:flex;align-items:center;height:100%;padding-left:", "px;"], p => p.$_css5);

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "AppBar___StyledDiv4",
  componentId: "sc-11q0awo-5"
})(["display:flex;align-items:center;height:100%;margin-left:auto;padding-right:", "px;"], p => p.$_css6);

export { AppBar$1 as default };
//# sourceMappingURL=AppBar.js.map
