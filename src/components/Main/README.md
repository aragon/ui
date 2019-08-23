# Main

Provides the base needed by the other components (styles and context providers) to work properly.

## Usage

```jsx
import { Main } from '@aragon/ui'

const App = () => (
  <Main>
    {/* Your app here */}
  </Main>
)
```

## Props

### `assetsUrl`

- Type: `String`
- Default: `./aragon-ui/`

Set this to configure the URL of the directory containing your aragonUI assets.

### `layout`

- Type: `Boolean`
- Default: `true`

Enable `<Layout />`.

### `scrollView`

- Type: `Boolean`
- Default: `true`

Enable `<ScrollView />`.
