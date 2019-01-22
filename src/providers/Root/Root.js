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
        <div ref={this._element}>{element ? children : null}</div>
      </Provider>
    )
  }
}

const Root = props => <Consumer {...props} />

Root.Provider = RootProvider

export { Root }
export default Root
