# AppBar

An AppBar component.

## Usage

```jsx
import { AppBar } from '@aragon/ui'

const App = () => (
  <AppBar title="Your Aragon App">
    {/* Your AppBar's content goes here */}
  </AppBar>
)
```

## Properties

### `title`

- Type: `String`

Set to the desired title of your choice.

#### Example:

```jsx
const App = () => (
  <AppBar title="Aragon Dashboard" />
)
```

### `onTitleClick`

- Type: `Function`

This prop makes the title clickable and will run when that event occurs.

#### Example:

```jsx
const App = () => (
  <AppBar title="Aragon Dashboard" onTitleClick={() => console.log('Title was clicked!')} />
)
```

### `endContent`

- Type: `Node`

Set the content you want to exist at the furthermost end of the AppBar.

#### Example:

```jsx
const App = () => (
  <AppBar title="Aragon Dashboard" endContent={<LoginButton />} />
)
```
