import React from 'react'
import PropTypes from 'prop-types'

const { Provider, Consumer } = React.createContext(null)

class RootProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }
  _element = React.createRef()
  state = {
    element: null,
  }
  componentDidMount() {
    this.setState({ element: this._element.current })
  }
  render() {
    const { element } = this.state
    const { children } = this.props
    return (
      <Provider value={element}>
        <div ref={this._element}>
          {/*
            We don’t render the children tree until the element is present, at
            the second rendering.

            The reason why it is needed is because element references are
            assigned after the first rendering, and we don’t want to let
            `<Root />` consumers having to deal with the reference being `null`
            at the first rendering.

            This way, we can guarantee that if a consumer gets `null` rather
            than the element, it’s because <Root.Provider /> has to be defined
            at an upper level.
          */
          element ? children : null}
        </div>
      </Provider>
    )
  }
}

const Root = props => <Consumer {...props} />

Root.Provider = RootProvider

export { Root }
export default Root
