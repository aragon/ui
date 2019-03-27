import React from 'react'
import { AppView } from '@aragon/ui'

class App extends React.Component {
  state = { active: 0 }
  handleChange = index => {
    this.setState({ active: index })
  }
  render() {
    const { active } = this.state
    return (
      <AppView>
        hello
      </AppView>
    )
  }
}

export default App
