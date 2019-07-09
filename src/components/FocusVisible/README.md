# FocusVisible

Implements a behavior similar to :focus-visible for browsers that are not supporting it yet.
It follows the Chrome implementation, checking for a pointer device rather than a keyboard event.

## Usage

```jsx
import { FocusVisible } from '@aragon/ui'

const App = () =>       <FocusVisible>
        {({ focusVisible, onFocus }) => (
          <Child
            focusVisible={focusVisible}
            onFocus={onFocus}
            {...props}
          />
        )}
      </FocusVisible>
```
