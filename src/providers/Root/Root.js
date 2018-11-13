import React from 'react'
import PropTypes from 'prop-types'

const { Provider, Consumer } = React.createContext(null)

class RootProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }
  state = { element: null }
  handleRef = element => {
    this.setState({ element })
  }
  render() {
    const { element } = this.state
    const { children } = this.props
    return (
      <Provider value={element}>
        <div ref={this.handleRef}>{children}</div>
      </Provider>
    )
  }
}

const Root = props => <Consumer {...props} />

Root.Provider = RootProvider

export { Root }
export default Root
