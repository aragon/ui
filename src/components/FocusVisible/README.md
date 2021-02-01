# FocusVisible

Implements a behavior similar to the CSS `:focus-visible` pseudo class, for
browsers that are not supporting it yet. It follows the Chrome implementation,
checking for a pointer device rather than a keyboard event.

## Usage

```jsx
import { FocusVisible } from '@tecommons/ui'

function App() {
  return (
    <FocusVisible>
      {({ focusVisible, onFocus }) => (
        <Child
          focusVisible={focusVisible}
          onFocus={onFocus}
          {...props}
        />
      )}
    </FocusVisible>
  )
}
```
