# Info

A info text component.

## Usage

```jsx
import { Info } from '@aragon/ui'

const App = () => (
  <Info title="Title">
    Some action info
  </Info>
)
```

## Properties

### `background`

- Type: `String`

Set the background of the info box. Defaults to "FFF9EB" (`theme.infoBackground`).

#### Example:

```jsx
const App = () => (
  <Info background="FFF9EB" title="Title">
    Some info
  </Info>
)

```

### `title`

- Type: `String`

Set the title of the info text

#### Example:

```jsx
const App = () => (
  <Info title="Title">
    Some info
  </Info>
)
```

## Attached Properties

These components extend Info by adding icons and additionally styled titles.

### `<Info.Action>`

Use this for action messages.

### `<Info.Permissions>`

Use this for permissions messages.
