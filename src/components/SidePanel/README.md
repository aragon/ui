# SidePanel

Renders a side panel with an overlay over the app.

## Usage

```jsx
import { SidePanel } from '@aragon/ui'

const App = (props) => (
  <SidePanel title="Menu" opened={props.opened}>
    {/* Content goes here */}
  </SidePanel>
)
```

## Properties

### `title`

- Type: `String`

Set a title for your SidePanel.

#### Example:

```jsx
const MySidePanel = (props) => (
  <SidePanel title="Checkout Details" {...props}>
    {/* form inputs */}
  </SidePanel>
)
```

### `opened`

- Type: `Boolean`

This property toggles the visibility of your SidePanel.

#### Example:

```jsx
const MySidePanel = (props) => (
  <SidePanel opened={props.opened} {...props}>
    {/* contents */}
  </SidePanel>
)
```

### `onClose`

- Type: `Function`

This property will be called when your SidePanel is closed.

#### Example:

```jsx
const MySidePanel = (props) => (
  <SidePanel opened={props.opened} onClose={() => console.log('MySidePanel was closed!')} {...props}>
    {/* contents */}
  </SidePanel>
)
```

### `blocking`

- Type: `Boolean`

When set, this property removes the ability to close the SidePanel.

#### Example:

```jsx
const MySidePanel = (props) => (
  <SidePanel blocking {...props}>
    {/* contents */}
  </SidePanel>
)
```