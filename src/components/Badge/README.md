# Badge

A Badge component.

## Usage

```jsx
import { Badge } from '@aragon/ui'

const App = () => (
  <Badge>Badge</Badge>
)
```

## Properties

### `shape`

- Type: `String`
- Values: `round` (default), `disc`, `smalldisc`, `compact`

### `foreground`

- Type: `String`

The text color.

### `background`

- Type: `String` (color)

The background color.

## Attached Components

These components are extending Badge by setting the `shape`, `foreground` and `background` props.

### `<Badge.Notification>`

Use this notifications (e.g. number of notification messages).

Additional props:

- `small`: use the `smalldisc` shape rather than `disc`.
- `count`: `Number`, any value higher than `99` will be displayed as “99”. Override `children` when set.

### `<Badge.Identity>`

Use this Aragon identities or account addresses.

Additional props:

- `small`: use the `smalldisc` shape rather than `disc`.
- `count`: `Number`, any value higher than `99` will be displayed as “99”. Override `children` when set.

### `<Badge.App>`

Use this app instances.

### `<Badge.Info>`

Use this for informative counts or characters (e.g. “2”, “?”, “99”).
