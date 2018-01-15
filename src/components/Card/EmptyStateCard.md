# EmptyStateCard

EmptyStateCard extends the Card Component with default content for representing an empty state in your app. 

## Usage

```jsx
import { EmptyStateCard, IconHome } from '@aragon/ui'

const App = () => (
  <EmptyStateCard
    actionText="Create a new post!"
    text="You seem to not have any content on your wall."
    icon={() => <IconHome color="blue" />}
  />
)
```

## Properties

### `title`

- Type: `String`
- Default: `"Nothing here."`

Set a title for your EmptyStateCard.

#### Example:

```jsx
const App = () => (
  <EmptyStateCard title="Oops, no content here!" />
)
```

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

- Type: `Node`

A button for triggering the main action of your EmptyStateCard.

#### Example:

```jsx
const App = () => (
  <EmptyStateCard actionButton={MyButton} />
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

### `onActivate`

- Type: `Function`

This will be called when the EmptyStateCard's action button is clicked.

#### Example:

```jsx
const App = () => (
  <EmptyStateCard onActivate={() => {console.log('The action button was clicked!')}} />
)
```
