'use strict';

var _extends = require('./extends-5150c1f4.js');
var defineProperty = require('./defineProperty-fdbd3c46.js');
var React = require('react');
var getDisplayName = require('./getDisplayName-7f913e84.js');
var environment = require('./environment.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const observe = (observe, initialState = {}) => Component => {
  var _class, _temp;

  return _temp = _class = class extends React__default["default"].Component {
    constructor(...args) {
      super(...args);

      defineProperty._defineProperty(this, "state", initialState);

      defineProperty._defineProperty(this, "subscribe", observable => {
        if (observable) {
          this.setState({
            subscription: observe(observable).subscribe(state => {
              this.setState(state);
            })
          });
        }
      });

      defineProperty._defineProperty(this, "unsubscribe", () => {
        this.state.subscription && this.state.subscription.unsubscribe();
      });
    }

    componentDidMount() {
      this.subscribe(this.props.observable);
    }

    componentWillReceiveProps({
      observable: nextObservable
    }) {
      const {
        observable
      } = this.props; // If a new observable gets passed in, unsubscribe from the old and subscribe to the new

      if (nextObservable !== observable) {
        this.unsubscribe();
        this.subscribe(nextObservable);
      }
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    render() {
      environment.warnOnce('observe()', 'observe() is deprecated. If you are using it with @aragon/api, using @aragon/api-react is now recommended instead.');
      const { ...props
      } = this.props; // Don't pass down the given observable

      delete props.observable;
      return /*#__PURE__*/React__default["default"].createElement(Component, _extends._extends({}, this.state, props));
    }

  }, defineProperty._defineProperty(_class, "displayName", `Observe(${getDisplayName.getDisplayName(Component)})`), defineProperty._defineProperty(_class, "propTypes", {
    observable: ({
      observable
    }, _, componentName) => {
      if (observable && typeof observable.subscribe !== 'function') {
        throw new Error(`Invalid prop \`observable\` supplied to \`${componentName}\` ` + '(wrapped by `observe()`). ' + '`observable` must be an RxJS Observable-like object. ' + `Given ${observable} instead.`);
      }
    }
  }), _temp;
};

var observe$1 = observe;

exports.observe = observe$1;
//# sourceMappingURL=observe-df523b49.js.map
