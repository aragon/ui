# Main

Provides the base needed by the other components (styles and context providers) to work properly.

## Usage

```jsx
import { Main } from '@tecommons/ui'

function App () {
  return (
    <Main>
      {/* Your app goes here */}
    </Main>
  )
}
```

## Props

### `assetsUrl`

| Type     | Default value  |
| -------- | -------------- |
| `String` | `./aragon-ui/` |

Set this to configure the URL of the directory containing your aragonUI assets.

### `layout`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Enable `<Layout />`.

### `scrollView`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Enable `<ScrollView />`.

### `theme`

| Type                 | Default value |
| -------------------- | ------------- |
| `String` or `Object` | `light`       |

The main theme used by aragonUI.
