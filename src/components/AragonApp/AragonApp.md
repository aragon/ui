# AragonApp

AragonApp provides everything needed to start an Aragon App.

## Usage

```jsx
import { AragonApp } from '@aragon/ui'

const App = () => (
  <AragonApp>
    {/* Your app's content goes here */}
  </AragonApp>
)
```

## Properties

### `className`

- Type: `String`

Set this property to a CSS class name of your choice.

#### Example:

```jsx
const App = () => (
  <AragonApp className="app">
    {/* Your app's content goes here */}
  </AragonApp>
)
```

### `backgroundLogo`

- Type: `Boolean`
- Default: `false`

Set to true to make the Aragon logo visible in the background of your app.

#### Example:

```jsx
const App = () => (
  <AragonApp backgroundLogo>
    {/* Your app's content goes here */}
  </AragonApp>
)
```

### `publicUrl`

- Type: `String`

Set to configure the home of your app's resources and content.

#### Example:

```jsx
const App = () => (
  <AragonApp publicUrl="/">
    {/* Your app's content goes here */}
  </AragonApp>
)
```