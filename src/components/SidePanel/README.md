# SidePanel

Renders a side panel with an overlay over the app.

## Usage

```jsx
function App() {
  const [opened, setOpened] = useState(false)

  return (
    <Main>
      <Button mode="strong" onClick={() => setOpened(true)}>
        Open the panel
      </Button>

      <SidePanel title="Panel title" opened={opened}>
        Sidepanel content goes here.
      </SidePanel>
    </Main>
  )
}
```

## Props

### `children`

| Type         | Default value   |
| ------------ | --------------- |
| `React node` | None (required) |

The content of the sidepanel.

### `title`

| Type         | Default value   |
| ------------ | --------------- |
| `React node` | None (required) |

The main title for the panel.

### `opened`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Toggles the visibility of the panel. Note: when the panel finishes closing, the children components will get unmounted.

### `onClose`

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

Gets called when the user tries to close the panel, by clicking on the close button or the overlay.

### `blocking`

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `false`       |

When set, removes the ability to close the panel by using the close button or the overlay.

## Related hooks

### `useSidePanel({ status, readyToFocus })`

This hook should be used inside `SidePanel`, and returns an object with two entries:

- `status` represents the current state of the panel: `opened`, `closed`, `opening`, `closing`.
- `readyToFocus` can be used to focus an element as soon as possible inside the panel without affecting the transition.

About the need to have `readyToFocus`: browser engines tend to force newly focused elements to move inside the viewport, skipping current transitions in the process. `readyToFocus` detects that the transition is half way, which is generally a safe point to start focusing an element without any transition issue. If you still notice a transition issue, another option is to use `status === 'opened'`.

#### Example

This is how `readyToFocus` can be used:

```jsx
// MySidePanel.js

function MySidePanel() {
  const inputRef = useRef()
  const { readyToFocus } = useSidePanel()

  useEffect(() => {
    if (readyToFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [readyToFocus, inputRef])

  // The TextInput will get focused as soon as possible.
  return <TextInput wide ref={inputRef} />
}

export default props => (
  <SidePanel title="Panel title" {...props}>
    <MySidePanel />
  </SidePanel>
)
```

And because calling `.focus()` on a reference is a very common use case, another hook is provided to do it easily: `useSidePanelFocusOnReady()`.

### `useSidePanelFocusOnReady(ref)`

This hook can be used to focus a ref (usually a `TextInput`) when `readyToFocus` is set to `true`.

It takes a React ref as a parameter, and creates one if not provided. It returns this ref.

This is how `useSidePanelFocusOnReady()` can be used:

```jsx
// MySidePanel.js

function MySidePanel() {
  const inputRef = useSidePanelFocusOnReady()

  // The TextInput will get focused as soon as possible.
  return <TextInput wide ref={inputRef} />
}

export default props => (
  <SidePanel title="Panel title" {...props}>
    <MySidePanel />
  </SidePanel>
)
```
