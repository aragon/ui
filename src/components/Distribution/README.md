# Distribution

This component can be used to visualize the distribution of a given value. It is often used inside the `Box` component, but can be used elsewhere too.

## Usage

```jsx
<Box>
  <Distribution
    heading="Fruit shares"
    display="all"
    values={[
      { value: 'Bananas', percentage: 37 },
      { value: 'Apples', percentage: 22 },
      { value: 'Cherries', percentage: 15 },
      { value: 'Oranges', percentage: 12 },
      { value: 'Grapefruits', percentage: 12 },
      { value: 'Rest', percentage: 2 },
    ]}
  />
</Box>
```

## Props

### colors

| Type    | Default value                |
| ------- | ---------------------------- |
| `Array` | Set of colors from the theme |

The different colors used to represent the values. If there are more values
than colors, it will rotate.

### display

| Type               | Default value |
| ------------------ | ------------- |
| `"all"` or `"bar"` | `"all"`       |

Set to `bar` to display the bar only.

### heading

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

An optional heading.

### itemTitle({ value, percentage, index })

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

This function gets called to generate the title attribute for each value.

### renderLegendItem({ value, percentage, index })

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

This function gets called to render individual items in the legend. You can
also pass a React component.

### values

| Type    | Default value   |
| ------- | --------------- |
| `Array` | None (required) |

The actual values. The items in the array must be an object composed of two
entries: `value`, which can be anything, and `percentage`, which has to be a
`Number`.

The total of the percentages for all the items should equal `100`. If not, the
component will try to render and emit a warning.
