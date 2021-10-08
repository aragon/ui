import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import objectWithoutProperties from '../../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js';
import classCallCheck from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import assertThisInitialized from '../../../node_modules/@babel/runtime/helpers/assertThisInitialized.js';
import inherits from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import possibleConstructorReturn from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import _styled, { css } from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { animated as extendedAnimated, Transition } from '../../../node_modules/react-spring/web.js';
import { Inside as i } from '../../../node_modules/use-inside/dist/index.js';
import Text from '../Text/Text.js';
import chevronSvg from './assets/chevron.svg.js';
import { useTheme } from '../../theme/Theme2.js';
import { PublicUrl } from '../../providers/PublicUrl/PublicUrl.js';
import { unselectable } from '../../utils/css.js';
import { springs } from '../../style/springs.js';
import { noop } from '../../utils/miscellaneous.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var BAR_HEIGHT = 64;

var _StyledDiv = _styled("div").withConfig({
  displayName: "AppBar___StyledDiv",
  componentId: "sc-11q0awo-0"
})(["overflow:hidden;display:flex;flex-direction:column;width:100%;min-height:", "px;background:", ";", ";padding-bottom:1px;&:after{content:'';position:absolute;left:0;right:0;bottom:0;border-bottom:1px solid ", ";}"], BAR_HEIGHT, function (p) {
  return p._css;
}, function (p) {
  return p._css2;
}, function (p) {
  return p._css3;
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "AppBar___StyledDiv2",
  componentId: "sc-11q0awo-1"
})(["display:flex;align-items:center;justify-content:flex-start;width:100%;height:", "px;"], function (p) {
  return p._css4;
});

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "AppBar___StyledDiv3",
  componentId: "sc-11q0awo-2"
})(["display:flex;align-items:center;height:100%;padding-left:", "px;"], function (p) {
  return p._css5;
});

var _StyledDiv4 = _styled("div").withConfig({
  displayName: "AppBar___StyledDiv4",
  componentId: "sc-11q0awo-3"
})(["display:flex;align-items:center;height:100%;margin-left:auto;padding-right:", "px;"], function (p) {
  return p._css6;
});

var AppBar = /*#__PURE__*/function (_React$Component) {
  inherits(AppBar, _React$Component);

  var _super = _createSuper(AppBar);

  function AppBar() {
    var _this;

    classCallCheck(this, AppBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    defineProperty(assertThisInitialized(_this), "state", {
      tabsHeight: 0
    });

    defineProperty(assertThisInitialized(_this), "_tabsRef", /*#__PURE__*/React.createRef());

    return _this;
  }

  createClass(AppBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateTabsHeight();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (Boolean(prevProps.tabs) !== Boolean(this.props.tabs)) {
        this.updateTabsHeight();
      }
    }
  }, {
    key: "updateTabsHeight",
    value: function updateTabsHeight() {
      var el = this._tabsRef.current;

      if (el) {
        this.setState({
          tabsHeight: el.clientHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var tabsHeight = this.state.tabsHeight;

      var _this$props = this.props,
          children = _this$props.children,
          endContent = _this$props.endContent,
          onTitleClick = _this$props.onTitleClick,
          padding = _this$props.padding,
          tabs = _this$props.tabs,
          title = _this$props.title,
          theme = _this$props.theme,
          props = objectWithoutProperties(_this$props, ["children", "endContent", "onTitleClick", "padding", "tabs", "title", "theme"]);

      return /*#__PURE__*/React.createElement(i, {
        name: "AppBar"
      }, /*#__PURE__*/React.createElement(_StyledDiv, {
        _css: theme.surface,
        _css2: unselectable(),
        _css3: theme.border
      }, /*#__PURE__*/React.createElement(_StyledDiv2, _extends_1({}, props, {
        _css4: BAR_HEIGHT - 1
      }), title && /*#__PURE__*/React.createElement(_StyledDiv3, {
        _css5: padding
      }, /*#__PURE__*/React.createElement(AppBarTitle, {
        chevron: Boolean(children),
        clickable: Boolean(onTitleClick),
        onClick: onTitleClick
      }, typeof title === 'string' ? /*#__PURE__*/React.createElement(Text, {
        size: "xxlarge",
        deprecationNotice: false
      }, title) : title)), children, endContent && /*#__PURE__*/React.createElement(_StyledDiv4, {
        _css6: padding
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
      }, function (tabs) {
        return tabs && function (styles) {
          return /*#__PURE__*/React.createElement(TabsWrapper, {
            style: styles
          }, /*#__PURE__*/React.createElement("div", {
            ref: _this2._tabsRef
          }, tabs));
        };
      })));
    }
  }]);

  return AppBar;
}(React.Component);

defineProperty(AppBar, "propTypes", {
  children: propTypes.node,
  endContent: propTypes.node,
  onTitleClick: propTypes.func,
  padding: propTypes.number,
  tabs: propTypes.element,
  theme: propTypes.object,
  title: propTypes.node
});

defineProperty(AppBar, "defaultProps", {
  onTitleClick: noop,
  padding: 30,
  title: ''
});

var AppBarTitle = PublicUrl.hocWrap(_styled.h1.withConfig({
  displayName: "AppBar__AppBarTitle",
  componentId: "sc-11q0awo-4"
})(["padding-right:20px;margin-right:calc(20px - 7px);white-space:nowrap;background-image:", ";background-position:100% 50%;background-repeat:no-repeat;cursor:", ";"], function (_ref) {
  var chevron = _ref.chevron;
  return chevron ? css(["url(", ")"], PublicUrl.styledUrl(chevronSvg)) : 'none';
}, function (_ref2) {
  var clickable = _ref2.clickable;
  return clickable ? 'pointer' : 'default';
}));
var TabsWrapper = _styled(extendedAnimated.div).withConfig({
  displayName: "AppBar__TabsWrapper",
  componentId: "sc-11q0awo-5"
})(["position:relative;z-index:1;"]);
function AppBar$1 (props) {
  var theme = useTheme();
  return /*#__PURE__*/React.createElement(AppBar, _extends_1({}, props, {
    theme: theme
  }));
}

export default AppBar$1;
//# sourceMappingURL=AppBar.js.map
