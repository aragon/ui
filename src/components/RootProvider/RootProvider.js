import React from 'react'

export const { Consumer, Provider } = React.createContext(null)

class RootProvider extends React.Component {
  state = { el: null }
  handleRef = el => {
    this.setState({ el })
  }
  render() {
    const { children } = this.props
    return (
      <Provider value={this.state}>
        <div ref={this.handleRef}>{children}</div>
      </Provider>
    )
  }
}

export default RootProvider
