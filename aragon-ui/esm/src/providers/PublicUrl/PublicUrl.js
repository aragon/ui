import React$1, { useContext } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import defineProperty$1 from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import classCallCheck$1 from '../../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass$1 from '../../../node_modules/@babel/runtime/helpers/createClass.js';
import inherits$1 from '../../../node_modules/@babel/runtime/helpers/inherits.js';
import possibleConstructorReturn$1 from '../../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf$1 from '../../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import { prefixUrl } from '../../utils/url.js';
import _extends_1 from '../../../node_modules/@babel/runtime/helpers/extends.js';
import getDisplayName$1 from '../../../node_modules/react-display-name/lib/getDisplayName.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf$1(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf$1(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn$1(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var PublicUrlContext = /*#__PURE__*/React$1.createContext('');
var Provider = PublicUrlContext.Provider,
    Consumer = PublicUrlContext.Consumer;

var PublicUrlProvider = /*#__PURE__*/function (_React$PureComponent) {
  inherits$1(PublicUrlProvider, _React$PureComponent);

  var _super = _createSuper(PublicUrlProvider);

  function PublicUrlProvider() {
    classCallCheck$1(this, PublicUrlProvider);

    return _super.apply(this, arguments);
  }

  createClass$1(PublicUrlProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          url = _this$props.url,
          children = _this$props.children;
      return /*#__PURE__*/React$1.createElement(Provider, {
        value: url
      }, children);
    }
  }]);

  return PublicUrlProvider;
}(React$1.PureComponent); // HOC wrapper


defineProperty$1(PublicUrlProvider, "propTypes", {
  url: propTypes.string.isRequired,
  children: propTypes.node
});

var hocWrap = function hocWrap(Component) {
  var HOC = function HOC(props) {
    return /*#__PURE__*/React$1.createElement(Consumer, null, function (url) {
      return /*#__PURE__*/React$1.createElement(Component, _extends_1({}, props, {
        publicUrl: url
      }));
    });
  };

  HOC.displayName = "PublicUrlProvider(".concat(getDisplayName$1(Component), ")");
  return HOC;
}; // styled-components utility for URLs


var styledUrl = function styledUrl(url) {
  return function (_ref) {
    var publicUrl = _ref.publicUrl;
    return prefixUrl(url, publicUrl);
  };
};

var PublicUrl = function PublicUrl(props) {
  return /*#__PURE__*/React$1.createElement(Consumer, props);
};

PublicUrl.Provider = PublicUrlProvider;
PublicUrl.hocWrap = hocWrap;
PublicUrl.styledUrl = styledUrl;

function usePublicUrl() {
  return useContext(PublicUrlContext);
}

export default PublicUrl;
export { Provider, PublicUrl, hocWrap, styledUrl, usePublicUrl };
//# sourceMappingURL=PublicUrl.js.map
