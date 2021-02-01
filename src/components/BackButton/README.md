# BackButton

A button used to go back to the previous screen. To be used with the `Bar` component. Adapts to the space available.

## Usage

```jsx
import { BackButton, Bar, Main } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <Bar primary={<BackButton onClick={() => goBack()} />} />
    </Main>
  )
}
```

## Props

<div class="info">

Additional props will get passed to the internal `ButtonBase` component.

</div>

### `label`

| Type     | Default value |
| -------- | ------------- |
| `String` | `"Back"`      |

The label displayed on the button.

### `onClick`

| Type                  | Default value |
| --------------------- | ------------- |
| `Function`: `() -> *` | None          |

Gets called when the user activates the button, by either clicking on it or using the enter key of the keyboard.
