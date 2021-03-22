# Slider

A slider component.

## Usage

```jsx
import { Component } from 'react'
import { Slider } from '@tecommons/ui'

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

## Props

### `value`

- Type: `Number`
- Default: `0`

### `onUpdate`
- Type: `Function: (value: Number) -> *`
