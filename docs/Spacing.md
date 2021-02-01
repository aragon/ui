# Spacing

aragonUI components try very hard to take care of their own spacing and responsiveness, depending on where and how they are used. For example, there is no need to set the dimensions of an app or center it: the `Main` component takes care of that automatically. As another example, using two `Box`s one after another will automatically apply a margin between the two.

However, you will likely encounter cases where you would like to set your own spacing. This is where the grid unit becomes useful.

## Grid unit

The grid unit is a base value we use for dimensions, including element geometry and spacing. It is set to `8`.

This is how it is generally used:

```jsx
import { Main, GU } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <div
        css={`
          width: ${10 * GU}px;
          padding: ${4 * GU}px ${2 * GU}px;
        `}
      />
    </Main>
  )
}
```

Note: a Babel plugin [will soon be provided](https://github.com/aragon/aragon-ui/pull/500) to enable a CSS-like syntax too.
