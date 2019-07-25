# EmptyStateCard

EmptyStateCard extends the Card Component with default content for representing an empty state in your app.

## Usage

```jsx
import { EmptyStateCard, IconHome } from '@aragon/ui'

const App = () => (
  <EmptyStateCard
    text="You seem to not have any content on your wall."
    icon={() => <IconHome color="blue" />}
  />
)
```

## Props

### `text`

- Type: `String`

Set some text content for your EmptyStateCard.

#### Example:

```jsx
const App = () => (
  <EmptyStateCard text="You seem to not have any content on your wall." />
)
```

### `icon`

- Type: `Node`

A icon to visually represent the purpose of your EmptyStateCard.

#### Example:

```jsx
const App = () => (
  <EmptyStateCard icon={() => <IconHome color="blue" />} />
)
```

### `actionButton`

- Type: `Boolean`

When `true` a button is rendered.

#### Example:

```jsx
const App = () => (
  <EmptyStateCard actionButton={true} />
)
```

### `actionText`

- Type: `String`

A label for your EmptyStateCard's action button.

#### Example:

```jsx
const App = () => (
  <EmptyStateCard actionText="Fix it!" />
)
```

### `onClick`

- Type: `Function`

This will be called when the EmptyStateCard's action button is clicked.

#### Example:

```jsx
const App = () => (
  <EmptyStateCard onClick={() => {console.log('The action button was clicked!')}} />
)
```
