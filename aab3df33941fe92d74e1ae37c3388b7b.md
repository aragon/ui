# Slider

A slider component.

## Usage

```jsx
import { Component } from 'react'
import { Slider } from '@aragon/ui'

class App extends Component {
  state = {
    progress: 0,
  }
  render() {
    const { progress } = this.state
    return (
      <Slider
        value={progress}
        onUpdate={(value) => this.setState({ progress: value })}
      />
    )
  }
}
```

## Properties

### `value`

- Type: `Number`
- Default: `0`

### `onUpdate`
- Type: `Function: (value: Number) -> *`
