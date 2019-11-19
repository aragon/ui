# LoadingRing

An animated loading indicator.

## Usage

```jsx
imoprt { Main, LoadingRing } from '@aragon/ui'

function App() {
  return <Main><LoadingRing /></Main>
}
```

## Props

### `paused`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

Set to `true` to pause the animation. Can be useful to optimize performances if the component is rendered but hidden.
