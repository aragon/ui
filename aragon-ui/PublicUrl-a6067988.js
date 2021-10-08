'use strict';

var _extends = require('./extends-023d783e.js');
var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var React = require('react');
var index = require('./index-37353731.js');
var getDisplayName = require('./getDisplayName-7f913e84.js');
var url = require('./url.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var PublicUrlContext = /*#__PURE__*/React__default['default'].createContext('');
var Provider = PublicUrlContext.Provider,
    Consumer = PublicUrlContext.Consumer;

var PublicUrlProvider = /*#__PURE__*/function (_React$PureComponent) {
  getPrototypeOf.inherits(PublicUrlProvider, _React$PureComponent);

  var _super = _createSuper(PublicUrlProvider);

  function PublicUrlProvider() {
    getPrototypeOf.classCallCheck(this, PublicUrlProvider);

    return _super.apply(this, arguments);
  }

  getPrototypeOf.createClass(PublicUrlProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          children = _this$props.children;
      return /*#__PURE__*/React__default['default'].createElement(Provider, {
        value: url
      }, children);
    }
  }]);

  return PublicUrlProvider;
}(React__default['default'].PureComponent); // HOC wrapper


defineProperty.defineProperty(PublicUrlProvider, "propTypes", {
  url: index.propTypes.string.isRequired,
  children: index.propTypes.node
});

var hocWrap = function hocWrap(Component) {
  var HOC = function HOC(props) {
    return /*#__PURE__*/React__default['default'].createElement(Consumer, null, function (url) {
      return /*#__PURE__*/React__default['default'].createElement(Component, _extends._extends_1({}, props, {
        publicUrl: url
      }));
    });
  };

  HOC.displayName = "PublicUrlProvider(".concat(getDisplayName.getDisplayName(Component), ")");
  return HOC;
}; // styled-components utility for URLs


var styledUrl = function styledUrl(url$1) {
  return function (_ref) {
    var publicUrl = _ref.publicUrl;
    return url.prefixUrl(url$1, publicUrl);
  };
};

var PublicUrl = function PublicUrl(props) {
  return /*#__PURE__*/React__default['default'].createElement(Consumer, props);
};

PublicUrl.Provider = PublicUrlProvider;
PublicUrl.hocWrap = hocWrap;
PublicUrl.styledUrl = styledUrl;

function usePublicUrl() {
  return React.useContext(PublicUrlContext);
}

exports.PublicUrl = PublicUrl;
exports.usePublicUrl = usePublicUrl;
//# sourceMappingURL=PublicUrl-a6067988.js.map
