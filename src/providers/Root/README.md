# Root

`Root` can be used to re render a component at the top level in the DOM tree. `Root.Provider` can be used to redefine the root level.

## Usage

```jsx
import { Root } from '@tecommons/ui'

function App() {
  return (
    <div>
      <p>Rendered in the current element</p>
      <Root>
        <p>Rendered at the root level of the DOM tree</p>
      </Root>
    </div>
  )
}
```
