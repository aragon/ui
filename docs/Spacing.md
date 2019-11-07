# Spacing

aragonUI components are taking care of their own spacing and responsiveness, depending on where and how they are used, when possible. For example, there is no need to set the dimensions of an app or center it: the `Main` component is taking care of that already. When a `Box` is used after another one, a margin is also applied automatically.

But there are always cases where it is necessary to set our own spacing. This is where the grid unit becomes useful.

## Grid unit

The grid unit is a simple value we use as a base for many things, including elements geometry and spacing. It is set to `8`.

This is how it can get used:

```jsx
import { Main, GU } from '@aragon/ui'

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
