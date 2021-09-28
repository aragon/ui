import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _defineProperty from '../../../node_modules/@babel/runtime/helpers/defineProperty.js';
import React from 'react';
import getDisplayName from '../../../node_modules/react-display-name/lib/getDisplayName.js';
import { warnOnce } from '../../utils/environment.js';

const observe = (observe, initialState = {}) => Component => {
  var _class, _temp;

  return _temp = _class = class extends React.Component {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "state", initialState);

      _defineProperty(this, "subscribe", observable => {
        if (observable) {
          this.setState({
            subscription: observe(observable).subscribe(state => {
              this.setState(state);
            })
          });
        }
      });

      _defineProperty(this, "unsubscribe", () => {
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
      warnOnce('observe()', 'observe() is deprecated. If you are using it with @aragon/api, using @aragon/api-react is now recommended instead.');
      const { ...props
      } = this.props; // Don't pass down the given observable

      delete props.observable;
      return /*#__PURE__*/React.createElement(Component, _extends({}, this.state, props));
    }

  }, _defineProperty(_class, "displayName", `Observe(${getDisplayName(Component)})`), _defineProperty(_class, "propTypes", {
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

export { observe$1 as default };
//# sourceMappingURL=observe2.js.map
