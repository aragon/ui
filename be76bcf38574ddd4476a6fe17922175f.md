# Header

An Aragon header component.

## Usage

```jsx
import { Header } from '@aragon/ui'

const App = () => (
  <Header />
)
```

## Properties

### `title`

- Type: `String`
- Default value: `undefined`

Set this property to display a title in the header, to be displayed on the
right side of the Aragon logo. The presence of a title will also switch the
header to a compact mode.

#### Example:

```jsx
<Header title="Signaling" />
```

### `menuItems`

- Type: `Array`
- Default value: `[]`

Set this property to an array of items to display a menu. Each item is
represented by an array, where the first entry is the URL, the second entry is
the label, and the last entry is a boolean representing the status of the item
(`true` if active).

Note: This property is ignored if `title` is set.

#### Example:

```jsx
<Header menuItems={[
  ['/foo', 'Foo', false],
  ['/bar', 'Bar', true],
  ['/baz', 'Baz', false],
]} />
```
