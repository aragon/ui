# Info

An info component, which can be used to display normal messages, warnings or errors.

## Usage

```jsx
import { Info } from '@tecommons/ui'

function MyApp = () => {
  return <Info title="Title">Some info</Info>
}
```

## Props

### `mode`

| Type                         | Default value |
| ---------------------------- | ------------- |
| `"info", "warning", "error"` | `"info"`      |

Set the mode of the Info component. The styles can be individually overriden by `background`, `color`, `borderColor` and `titleColor`.

### `title`

| Type     | Default value |
| -------- | ------------- |
| `String` | None          |

Set a title for the info box.

#### Example:

```jsx
<Info title="My title">Some info</Info>
```

### `background`

| Type  | Default value |
| ----- | ------------- |
| Color | None          |

Set the background of the info box.

### `color`

| Type  | Default value |
| ----- | ------------- |
| Color | None          |

Set the text color.

### `borderColor`

| Type  | Default value |
| ----- | ------------- |
| Color | None          |

Set the border color of the info box.

### `titleColor`

| Type  | Default value |
| ----- | ------------- |
| Color | None          |

Set the title color.
