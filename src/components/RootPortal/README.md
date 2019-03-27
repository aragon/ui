# RootPortal

Render a component at the root level of the aragonUI app. This is useful for tooltips, modals, or any other element that requires to be rendered on top of the other elements.

## Usage

```jsx
import { Main, RootPortal } from '@aragon/ui'

const App = () => (
  <Main>
    <ul>
      <li>
        <p>This gets rendered here in the DOM tree.</p>

        <RootPortal>
          <p>This gets rendered at the level of Main in the DOM tree.</p>
        </RootPortal>
      </li>
    </ul>
  </Main>
)
```

## Properties

### `children`

- Type: React node
- Required

Pass anything here and it will get rendered at the `<Root />` level.
