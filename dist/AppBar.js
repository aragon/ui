'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var defineProperty = require('./defineProperty-fdbd3c46.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-19b0c963.js');
var web = require('./web-17920307.js');
var index = require('./index-70e12149.js');
var Text = require('./Text.js');
var Theme = require('./Theme.js');
var css = require('./css.js');
var springs = require('./springs.js');
var miscellaneous = require('./miscellaneous.js');
var PublicUrl = require('./PublicUrl-dfca81a5.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./environment.js');
require('./font.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./getDisplayName-7f913e84.js');
require('./url.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var chevronSvg = "data:image/svg+xml,%3Csvg%20width%3D%227%22%20height%3D%2212%22%20viewBox%3D%220%200%207%2012%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M.446%2012a.512.512%200%2001-.172-.03.422.422%200%2001-.146-.087A.37.37%200%20010%2011.6a.37.37%200%2001.128-.281l5.826-5.361L.217.692A.376.376%200%2001.089.405.378.378%200%2001.217.117.444.444%200%2001.529%200c.123%200%20.228.04.313.117l6.03%205.56A.37.37%200%20017%205.96a.37.37%200%2001-.128.281l-6.12%205.643A.477.477%200%2001.446%2012z%22%20fill%3D%22%2300CBE6%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E";

const BAR_HEIGHT = 64;

class AppBar extends React__default["default"].Component {
  constructor(...args) {
    super(...args);

    defineProperty._defineProperty(this, "state", {
      tabsHeight: 0
    });

    defineProperty._defineProperty(this, "_tabsRef", /*#__PURE__*/React__default["default"].createRef());
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
    return /*#__PURE__*/React__default["default"].createElement(index.i, {
      name: "AppBar"
    }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv, {
      $_css: theme.surface,
      $_css2: css.unselectable(),
      $_css3: theme.border
    }, /*#__PURE__*/React__default["default"].createElement(_StyledDiv2, _extends._extends({}, props, {
      $_css4: BAR_HEIGHT - 1
    }), title && /*#__PURE__*/React__default["default"].createElement(_StyledDiv3, {
      $_css5: padding
    }, /*#__PURE__*/React__default["default"].createElement(AppBarTitle, {
      chevron: Boolean(children),
      clickable: Boolean(onTitleClick),
      onClick: onTitleClick
    }, typeof title === 'string' ? /*#__PURE__*/React__default["default"].createElement(Text["default"], {
      size: "xxlarge",
      deprecationNotice: false
    }, title) : title)), children, endContent && /*#__PURE__*/React__default["default"].createElement(_StyledDiv4, {
      $_css6: padding
    }, endContent)), /*#__PURE__*/React__default["default"].createElement(web.Transition, {
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
      config: springs.springs.smooth,
      native: true
    }, tabs => tabs && (styles => /*#__PURE__*/React__default["default"].createElement(TabsWrapper, {
      style: styles
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      ref: this._tabsRef
    }, tabs))))));
  }

}

defineProperty._defineProperty(AppBar, "propTypes", {
  children: index$1.PropTypes.node,
  endContent: index$1.PropTypes.node,
  onTitleClick: index$1.PropTypes.func,
  padding: index$1.PropTypes.number,
  tabs: index$1.PropTypes.element,
  theme: index$1.PropTypes.object,
  title: index$1.PropTypes.node
});

defineProperty._defineProperty(AppBar, "defaultProps", {
  onTitleClick: miscellaneous.noop,
  padding: 30,
  title: ''
});

const AppBarTitle = PublicUrl.PublicUrl.hocWrap(_styled__default["default"].h1.withConfig({
  displayName: "AppBar__AppBarTitle",
  componentId: "sc-11q0awo-0"
})(["padding-right:20px;margin-right:calc(20px - 7px);white-space:nowrap;background-image:", ";background-position:100% 50%;background-repeat:no-repeat;cursor:", ";"], ({
  chevron
}) => chevron ? _styled.css(["url(", ")"], PublicUrl.PublicUrl.styledUrl(chevronSvg)) : 'none', ({
  clickable
}) => clickable ? 'pointer' : 'default'));
const TabsWrapper = _styled__default["default"](web.extendedAnimated.div).withConfig({
  displayName: "AppBar__TabsWrapper",
  componentId: "sc-11q0awo-1"
})(["position:relative;z-index:1;"]);
function AppBar$1 (props) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default["default"].createElement(AppBar, _extends._extends({}, props, {
    theme: theme
  }));
}

var _StyledDiv = _styled__default["default"]("div").withConfig({
  displayName: "AppBar___StyledDiv",
  componentId: "sc-11q0awo-2"
})(["overflow:hidden;display:flex;flex-direction:column;width:100%;min-height:", "px;background:", ";", ";padding-bottom:1px;&:after{content:'';position:absolute;left:0;right:0;bottom:0;border-bottom:1px solid ", ";}"], BAR_HEIGHT, p => p.$_css, p => p.$_css2, p => p.$_css3);

var _StyledDiv2 = _styled__default["default"]("div").withConfig({
  displayName: "AppBar___StyledDiv2",
  componentId: "sc-11q0awo-3"
})(["display:flex;align-items:center;justify-content:flex-start;width:100%;height:", "px;"], p => p.$_css4);

var _StyledDiv3 = _styled__default["default"]("div").withConfig({
  displayName: "AppBar___StyledDiv3",
  componentId: "sc-11q0awo-4"
})(["display:flex;align-items:center;height:100%;padding-left:", "px;"], p => p.$_css5);

var _StyledDiv4 = _styled__default["default"]("div").withConfig({
  displayName: "AppBar___StyledDiv4",
  componentId: "sc-11q0awo-5"
})(["display:flex;align-items:center;height:100%;margin-left:auto;padding-right:", "px;"], p => p.$_css6);

exports["default"] = AppBar$1;
//# sourceMappingURL=AppBar.js.map
