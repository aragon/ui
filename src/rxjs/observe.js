import React from 'react'
import getDisplayName from 'react-display-name'

// Higher-order component for convenient subscriptions to RxJS observables
const observe = (observe, initialState = {}) => Component =>
  class extends React.Component {
    static displayName = `Observe(${getDisplayName(Component)})`
    static propTypes = {
      observable: ({ observable }, _, componentName) => {
        if (observable && typeof observable.subscribe !== 'function') {
          throw new Error(
            `Invalid prop \`observable\` supplied to \`${componentName}\` ` +
              '(wrapped by `observe()`). ' +
              '`observable` must be an RxJS Observable-like object. ' +
              `Given ${observable} instead.`
          )
        }
      },
    }
    state = initialState
    componentDidMount() {
      this.subscribe(this.props.observable)
    }
    componentWillReceiveProps({ observable: nextObservable }) {
      const { observable } = this.props
      // If a new observable gets passed in, unsubscribe from the old and subscribe to the new
      if (nextObservable !== observable) {
        this.unsubscribe()
        this.subscribe(nextObservable)
      }
    }
    componentWillUnmount() {
      this.unsubscribe()
    }
    subscribe = observable => {
      if (observable) {
        this.setState({
          subscription: observe(observable).subscribe(state => {
            this.setState(state)
          }),
        })
      }
    }
    unsubscribe = () => {
      this.state.subscription && this.state.subscription.unsubscribe()
    }
    render() {
      const { ...props } = this.props
      // Don't pass down the given observable
      delete props.observable

      return <Component {...this.state} {...props} />
    }
  }

export default observe
