'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-023d783e.js');
var getPrototypeOf = require('./getPrototypeOf-55c9e80c.js');
var defineProperty = require('./defineProperty-3cad0327.js');
var React = require('react');
var index = require('./index-37353731.js');
var _styled = require('styled-components');
var _commonjsHelpers = require('./_commonjsHelpers-1b94f6bc.js');
var web3 = require('./web3-4ef44cda.js');
var components = require('./components.js');
require('./environment.js');
require('./miscellaneous.js');
require('./toConsumableArray-cc0d28a9.js');
require('./unsupportedIterableToArray-f175acfa.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);

var main = _commonjsHelpers.createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(React__default['default']);



var _propTypes2 = _interopRequireDefault(index.propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Identicon = function (_Component) {
  _inherits(Identicon, _Component);

  function Identicon(props) {
    _classCallCheck(this, Identicon);

    var _this = _possibleConstructorReturn(this, (Identicon.__proto__ || Object.getPrototypeOf(Identicon)).call(this, props));

    _this.generateIdenticon = _this.generateIdenticon.bind(_this);
    return _this;
  }

  _createClass(Identicon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.generateIdenticon(_extends({}, this.props));
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      if (!this.isEquivalent(this.props, nextProps)) this.generateIdenticon(_extends({}, nextProps));
    }
  }, {
    key: 'isEquivalent',
    value: function isEquivalent(prevProps, nextProps) {
      var aProps = Object.getOwnPropertyNames(prevProps);
      var bProps = Object.getOwnPropertyNames(nextProps);

      if (aProps.length != bProps.length) {
        return false;
      }

      for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (prevProps[propName] !== nextProps[propName]) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: 'generateIdenticon',
    value: function generateIdenticon(options) {
      // NOTE --  Majority of this code is referenced from: https://github.com/alexvandesande/blockies
      //          Mostly to ensure congruence to Ethereum Mist's Identicons

      // The random number is a js implementation of the Xorshift PRNG
      var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

      function seedrand(seed) {
        for (var i = 0; i < randseed.length; i++) {
          randseed[i] = 0;
        }
        for (var _i = 0; _i < seed.length; _i++) {
          randseed[_i % 4] = (randseed[_i % 4] << 5) - randseed[_i % 4] + seed.charCodeAt(_i);
        }
      }

      function rand() {
        // based on Java's String.hashCode(), expanded to 4 32bit values
        var t = randseed[0] ^ randseed[0] << 11;

        randseed[0] = randseed[1];
        randseed[1] = randseed[2];
        randseed[2] = randseed[3];
        randseed[3] = randseed[3] ^ randseed[3] >> 19 ^ t ^ t >> 8;

        return (randseed[3] >>> 0) / (1 << 31 >>> 0);
      }

      function createColor() {
        // saturation is the whole color spectrum
        var h = Math.floor(rand() * 360);
        // saturation goes from 40 to 100, it avoids greyish colors
        var s = rand() * 60 + 40 + '%';
        // lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
        var l = (rand() + rand() + rand() + rand()) * 25 + '%';

        var color = 'hsl(' + h + ',' + s + ',' + l + ')';
        return color;
      }

      function createImageData(size) {
        var width = size; // Only support square icons for now
        var height = size;

        var dataWidth = Math.ceil(width / 2);
        var mirrorWidth = width - dataWidth;

        var data = [];
        for (var y = 0; y < height; y++) {
          var row = [];
          for (var x = 0; x < dataWidth; x++) {
            // this makes foreground and background color to have a 43% (1/2.3) probability
            // spot color has 13% chance
            row[x] = Math.floor(rand() * 2.3);
          }
          var r = row.slice(0, mirrorWidth);
          r.reverse();
          row = row.concat(r);

          for (var i = 0; i < row.length; i++) {
            data.push(row[i]);
          }
        }

        return data;
      }

      function setCanvas(identicon, imageData, color, scale, bgcolor, spotcolor) {
        var width = Math.sqrt(imageData.length);
        var size = width * scale;

        identicon.width = size;
        identicon.style.width = size + 'px';

        identicon.height = size;
        identicon.style.height = size + 'px';

        var cc = identicon.getContext('2d');
        cc.fillStyle = bgcolor;
        cc.fillRect(0, 0, identicon.width, identicon.height);
        cc.fillStyle = color;

        for (var i = 0; i < imageData.length; i++) {
          // if data is 2, choose spot color, if 1 choose foreground
          cc.fillStyle = imageData[i] === 1 ? color : spotcolor;

          // if data is 0, leave the background
          if (imageData[i]) {
            var row = Math.floor(i / width);
            var col = i % width;

            cc.fillRect(col * scale, row * scale, scale, scale);
          }
        }
      }

      var opts = options || {};
      var size = opts.size || 8;
      var scale = opts.scale || 4;
      var seed = opts.seed || Math.floor(Math.random() * Math.pow(10, 16)).toString(16);

      seedrand(seed);

      var color = opts.color || createColor();
      var bgcolor = opts.bgColor || createColor();
      var spotcolor = opts.spotColor || createColor();
      var imageData = createImageData(size);
      var canvas = setCanvas(this.identicon, imageData, color, scale, bgcolor, spotcolor);

      return canvas;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('canvas', {
        ref: function ref(identicon) {
          _this2.identicon = identicon;
        },
        className: this.props.className
      });
    }
  }]);

  return Identicon;
}(React__default['default'].Component);

exports.default = Identicon;


Identicon.defaultProps = {
  className: 'identicon'
};

Identicon.propTypes = {
  seed: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.number,
  scale: _propTypes2.default.number,
  color: _propTypes2.default.string,
  bgColor: _propTypes2.default.string,
  spotColor: _propTypes2.default.string
};
});

var Blockies = /*@__PURE__*/_commonjsHelpers.unwrapExports(main);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return getPrototypeOf.possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var PX_RATIO = typeof devicePixelRatio === 'undefined' ? 2 : devicePixelRatio;
var BLOCKIES_SQUARES = 8; // commonly used to represent Ethereum addresses

var BASE_SCALE = 3;

var EthIdenticon = /*#__PURE__*/function (_React$Component) {
  getPrototypeOf.inherits(EthIdenticon, _React$Component);

  var _super = _createSuper(EthIdenticon);

  function EthIdenticon() {
    getPrototypeOf.classCallCheck(this, EthIdenticon);

    return _super.apply(this, arguments);
  }

  getPrototypeOf.createClass(EthIdenticon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          address = _this$props.address,
          scale = _this$props.scale,
          radius = _this$props.radius,
          soften = _this$props.soften;
      var blockiesScale = scale * BASE_SCALE;
      return web3.isAddress(address) ? /*#__PURE__*/React__default['default'].createElement(Main, _extends._extends_1({
        size: BLOCKIES_SQUARES * blockiesScale,
        radius: radius
      }, components.stylingProps(this)), /*#__PURE__*/React__default['default'].createElement(BlockiesScaling, {
        size: BLOCKIES_SQUARES * blockiesScale * PX_RATIO
      }, /*#__PURE__*/React__default['default'].createElement(BlockiesOpacity, {
        soften: soften
      }, /*#__PURE__*/React__default['default'].createElement(Blockies, {
        seed: address.toLowerCase(),
        size: BLOCKIES_SQUARES,
        scale: blockiesScale * PX_RATIO
      })))) : null;
    }
  }]);

  return EthIdenticon;
}(React__default['default'].Component);
/*
 * `vertical-align` prevents the inline parent to have an incorrect height.
 *
 * See
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=491549#c9
 * - https://bugzilla.mozilla.org/show_bug.cgi?id=737757#c1
 */


defineProperty.defineProperty(EthIdenticon, "propTypes", {
  address: index.propTypes.string.isRequired,
  scale: index.propTypes.number,
  radius: index.propTypes.number,
  soften: index.propTypes.number
});

defineProperty.defineProperty(EthIdenticon, "defaultProps", {
  scale: 1,
  radius: 0,
  soften: 0.3
});

var Main = _styled__default['default'].div.withConfig({
  displayName: "EthIdenticon__Main",
  componentId: "sc-1h8gagr-0"
})(["display:inline-flex;vertical-align:middle;overflow:hidden;width:", "px;height:", "px;border-radius:", "px;mask-image:linear-gradient(red,red);"], function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, function (p) {
  return p.radius;
});
var BlockiesOpacity = _styled__default['default'].div.withConfig({
  displayName: "EthIdenticon__BlockiesOpacity",
  componentId: "sc-1h8gagr-1"
})(["opacity:", ";"], function (p) {
  return 1 - p.soften;
});
var BlockiesScaling = _styled__default['default'].div.withConfig({
  displayName: "EthIdenticon__BlockiesScaling",
  componentId: "sc-1h8gagr-2"
})(["display:flex;width:", "px;height:", "px;background:#fff;transform:scale(", ",", ");transform-origin:0 0;"], function (p) {
  return p.size;
}, function (p) {
  return p.size;
}, 1 / PX_RATIO, 1 / PX_RATIO);

exports.default = EthIdenticon;
//# sourceMappingURL=EthIdenticon.js.map
