# AppView

This component gives the base layout of a typical Aragon app, with a header and a scrollable view for content.

## Usage

```jsx
import { AppView } from '@aragon/ui'

const App = () => (
  <AppView title="My App">
    {/* The app content goes here */}
  </AppView>
)
```

## Properties

### `title`

- Type: `String`

Set to the desired title of your choice.

### `padding`

- Type: `Number`
- Default: `30`

Use this prop to change the default padding in pixels. Set it to `0` to disable it.

### `appBar`

- Type: `AppBar`

Use this prop to use advanced features of `AppBar`, like `onTitleClick` or `endContent`. If `appBar` is provided, this component’s `title` prop is ignored so you’ll have to specify a `title` directly on the `appBar`.

#### Example:

```jsx
const App = () => (
  <AppView
    appBar={
      <AppBar
        title="My App"
        onTitleClick={() => console.log('Title was clicked!')}
      />
    }
  >
    {/* … */}
  </AppView>
)
```
