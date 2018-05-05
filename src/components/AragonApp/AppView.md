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

- Type: `Boolean`
- Default: `true`

Set to `false` in order to disable the content padding.

### `appBar`

- Type: `AppBar`

Use this prop to use advanced features of `AppBar`, like `onTitleClick` or `endContent`. Takes priority over the `title` prop.

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
