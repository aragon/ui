# NavigationBar

Handles the navigation state in the header. This component can work independently, but is meant to be used as a child of the `AppBar` component.

## Usage

```jsx
import { AppView, AppBar, NavigationBar } from '@tecommons/ui'

const App = () => {
  const [navigationItems, setNavigationItems] = useState(['Level 1'])

  return (
    <AppView
      appBar={
        <AppBar title="Your Aragon App">
          <NavigationBar
            items={navigationItems}
            onBack={() => setNavigationItems()}
          />
        </AppBar>
      }
    >
      <h1>My App</h1>

      <button
        onClick={() => {
          // Remove the last item in navigationItems
          if (navigationItem.length > 1) {
            setNavigationItems(navigationItem.slice(0, -1))
          }
        }}
      >
        Previous
      </button>

      <button
        onClick={() => {
          // Add an item to navigationItems
          setNavigationItems([...navigationItems, `Level ${items.length + 1}`])
        }}
      >
        Next
      </button>
    </AppView>
  )
}
```

## Props

### `items`

- Type: `Array`

The navigation items, representing the navigation history. The last one is the current navigation state.

### `onBack`

- Type: `Function`

Called when the back action is initiated by the user.

### `compact`

- Type: `Boolean`

Set to `true` to make the navigation bar more compact (useful on small screens).
