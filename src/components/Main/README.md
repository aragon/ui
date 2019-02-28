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

## Properties

### `legacyFonts`

- Type: `Boolean`
- Default: `false`

Set this to `true` if you wish to support for WOFF 1.0 browsers (like Internet Explorer 11).

### `publicUrl`

- Type: `String`
- Default: `./aragon-ui/`

Set this to configure the URL of the directory containing your aragonUI assets.
