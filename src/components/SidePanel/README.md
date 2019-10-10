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

| Type                                   | Default value   |
| -------------------------------------- | --------------- |
| `React node` or `Function (component)` | None (required) |

The content of the sidepanel. When a component is passed, it receives two props:

- `status` represents the different states the panel can take: `opened`, `closed`, `opening`, `closing`.
- `readyToFocus` can be used to focus an element as soon as possible inside the panel without affecting the transition.

About the need to have `readyToFocus`: browser engines tend to force newly focused elements to move inside the viewport, skipping current transitions in the process. `readyToFocus` detects that the transition is half way, which is generally a safe point to start focusing an element without any transition issue. If you still notice a transition issue, another option is to use `status === 'opened'`.

Example:

```jsx
function App() {
  const [opened, setOpened] = useState(false)

  return (
    <Main>
      <Button mode="strong" onClick={() => setOpened(true)}>
        Open the panel
      </Button>

      <SidePanel title="Panel title" opened={opened}>
        {SidePanelContent}
      </SidePanel>
    </Main>
  )
}

function SidePanelContent({ readyToFocus }) {
  const inputRef = useRef()

  useEffect(() => {
    if (readyToFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [readyToFocus, inputRef])

  return <TextInput wide ref={inputRef} />
}
```

### `title`

| Type         | Default value   |
| ------------ | --------------- |
| `React node` | None (required) |

The main title for the panel.

### `opened`

| Type      | Default value   |
| --------- | --------------- |
| `Boolean` | None (required) |

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
