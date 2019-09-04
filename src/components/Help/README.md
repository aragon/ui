# Help

Provide contextual help content.

Notes:

- When `Link` is used inside the help component, its default color will become `theme.help`.
- When `Help` is used inside a `Box` heading, it will add the proper spacing automatically.

## Usage

```jsx
    <Help hint="More info about something">
      The Minimum Approval refers to the  percentage of the minimum amount of
      tokens that need to vote YES for a vote to pass.
    </Help>
  )
}
```

## Props

### `hint`

| Type     | Default value   |
| -------- | --------------- |
| `String` | None (required) |

Used for the `title` attribute of the button.

### `children`

| Type         | Default value   |
| ------------ | --------------- |
| `React node` | None (required) |

The content that will be displayed inside the popover.
