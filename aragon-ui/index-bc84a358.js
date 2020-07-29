'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-b0606964.js');
var defineProperty = require('./defineProperty-0921a47c.js');
var getPrototypeOf = require('./getPrototypeOf-2a661a20.js');
var url = require('./url.js');
var _extends = require('./extends-40571110.js');
var getDisplayName = require('./getDisplayName-7ab6d318.js');

function _createSuper(Derived) { return function () { var Super = getPrototypeOf._getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf._getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf._possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var PublicUrlContext = React__default.createContext('');
var Provider = PublicUrlContext.Provider,
    Consumer = PublicUrlContext.Consumer;

var PublicUrlProvider = /*#__PURE__*/function (_React$PureComponent) {
  getPrototypeOf._inherits(PublicUrlProvider, _React$PureComponent);

  var _super = _createSuper(PublicUrlProvider);

  function PublicUrlProvider() {
    getPrototypeOf._classCallCheck(this, PublicUrlProvider);

    return _super.apply(this, arguments);
  }

  getPrototypeOf._createClass(PublicUrlProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          children = _this$props.children;
      return /*#__PURE__*/React__default.createElement(Provider, {
        value: url
      }, children);
    }
  }]);

  return PublicUrlProvider;
}(React__default.PureComponent); // HOC wrapper


defineProperty._defineProperty(PublicUrlProvider, "propTypes", {
  url: index.PropTypes.string.isRequired,
  children: index.PropTypes.node
});

var hocWrap = function hocWrap(Component) {
  var HOC = function HOC(props) {
    return /*#__PURE__*/React__default.createElement(Consumer, null, function (url) {
      return /*#__PURE__*/React__default.createElement(Component, _extends._extends({}, props, {
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
  return /*#__PURE__*/React__default.createElement(Consumer, props);
};

PublicUrl.Provider = PublicUrlProvider;
PublicUrl.hocWrap = hocWrap;
PublicUrl.styledUrl = styledUrl;

function usePublicUrl() {
  return React.useContext(PublicUrlContext);
}

exports.PublicUrl = PublicUrl;
exports.usePublicUrl = usePublicUrl;
//# sourceMappingURL=index-bc84a358.js.map
