import classCallCheck from '../../node_modules/@babel/runtime/helpers/classCallCheck.js';
import createClass from '../../node_modules/@babel/runtime/helpers/createClass.js';
import inherits from '../../node_modules/@babel/runtime/helpers/inherits.js';
import possibleConstructorReturn from '../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js';
import getPrototypeOf from '../../node_modules/@babel/runtime/helpers/getPrototypeOf.js';
import wrapNativeSuper from '../../node_modules/@babel/runtime/helpers/wrapNativeSuper.js';
import toConsumableArray from '../../node_modules/@babel/runtime/helpers/toConsumableArray.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var RGB_HEX_RE = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

function rgbFromRgbInt(rgbInt) {
  return {
    r: Math.floor(rgbInt / Math.pow(256, 2)),
    g: Math.floor(rgbInt / 256 % 256),
    b: Math.floor(rgbInt % 256)
  };
}

function normalizeHexColor(value) {
  var matches = value ? String(value).match(RGB_HEX_RE) : null;

  if (matches === null) {
    throw new Error("color(): the value must be a valid CSS hexadecimal color. Received: ".concat(value));
  }

  var hexColor = matches[1].toUpperCase();

  if (hexColor.length === 3) {
    return toConsumableArray(hexColor).map(function (c) {
      return c + c;
    }).join('');
  }

  return hexColor;
}

var Color = /*#__PURE__*/function (_String) {
  inherits(Color, _String);

  var _super = _createSuper(Color);

  function Color(value) {
    var _this;

    classCallCheck(this, Color);

    _this = _super.call(this, value);
    var hexColor = normalizeHexColor(value);

    var _rgbFromRgbInt = rgbFromRgbInt(parseInt(hexColor, 16)),
        r = _rgbFromRgbInt.r,
        g = _rgbFromRgbInt.g,
        b = _rgbFromRgbInt.b;

    _this.r = r;
    _this.g = g;
    _this.b = b;
    _this.hexColor = hexColor;
    return _this;
  }

  createClass(Color, [{
    key: "toString",
    value: function toString() {
      return this.toCssRgb();
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.toCssRgb();
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.r, this.g, this.b];
    }
  }, {
    key: "toObject",
    value: function toObject() {
      var r = this.r,
          g = this.g,
          b = this.b;
      return {
        r: r,
        g: g,
        b: b
      };
    }
  }, {
    key: "alpha",
    value: function alpha(_alpha) {
      return this.toCssRgb({
        alpha: _alpha
      });
    }
  }, {
    key: "toCssRgb",
    value: function toCssRgb() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$alpha = _ref.alpha,
          alpha = _ref$alpha === void 0 ? 1 : _ref$alpha;

      if (alpha === 1) {
        return "#".concat(this.hexColor);
      }

      alpha = Math.max(0, Math.min(1, alpha));
      return "rgba(".concat(this.r, ", ").concat(this.g, ", ").concat(this.b, ", ").concat(alpha, ")");
    }
  }]);

  return Color;
}( /*#__PURE__*/wrapNativeSuper(String));

function color(value) {
  return new Color(value);
}

export default color;
//# sourceMappingURL=color.js.map
