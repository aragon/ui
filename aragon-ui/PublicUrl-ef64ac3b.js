'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var index = require('./index-46d0e707.js');
var defineProperty$1 = require('./defineProperty-3cad0327.js');
var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');
var url = require('./url.js');
var _extends$1 = require('./extends-023d783e.js');
var getDisplayName = require('./getDisplayName-7f913e84.js');

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var PublicUrlContext = /*#__PURE__*/React__default.createContext('');
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
      return /*#__PURE__*/React__default.createElement(Provider, {
        value: url
      }, children);
    }
  }]);

  return PublicUrlProvider;
}(React__default.PureComponent); // HOC wrapper


defineProperty$1.defineProperty(PublicUrlProvider, "propTypes", {
  url: index.propTypes.string.isRequired,
  children: index.propTypes.node
});

var hocWrap = function hocWrap(Component) {
  var HOC = function HOC(props) {
    return /*#__PURE__*/React__default.createElement(Consumer, null, function (url) {
      return /*#__PURE__*/React__default.createElement(Component, _extends$1._extends_1({}, props, {
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
//# sourceMappingURL=PublicUrl-ef64ac3b.js.map
