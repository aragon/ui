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