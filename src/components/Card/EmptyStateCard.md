# EmptyStateCard

EmptyStateCard extends the Card component to represent an empty state in your app.

## Usage

```jsx
import { Main, Button, EmptyStateCard } from '@tecommons/ui'

function App() {
  return (
    <EmptyStateCard
      text="There is no content."
      action={<Button>>Action</Button>}
    />
  )
}
```

## Props

### text

| Type         | Default value   |
| ------------ | --------------- |
| `React node` | None (required) |

Set some text content for your EmptyStateCard.

#### Example:

```jsx
<EmptyStateCard text="You seem to not have any content on your wall." />
```

### `illustration`

| Type         | Default value          |
| ------------ | ---------------------- |
| `React node` | A default illustration |

An illustration to visually represent the empty state.

#### Example:

```jsx
<EmptyStateCard illustration={<img src={illustrationSrc} alt="" />} />
```

### `action`

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

The action, usually represented by a `Button`.

Note: the Button will automatically set `mode` to `"strong"` and `wide` to `true` when used inside EmptyStateCard.

#### Example:

```jsx
const App = () => (
  <EmptyStateCard
    text="No votes yet."
    action={<Button label="Create a new vote" onClick={createVote} />}
  />
)
```
