# Distribution

This component can be used to visualize the distribution of a given value. It is often used inside the `Box` component, but can be used elsewhere too.

## Usage

```jsx
<Box>
  <Distribution
    heading="Fruit shares"
    items={[
      { item: 'Bananas', percentage: 37 },
      { item: 'Apples', percentage: 22 },
      { item: 'Cherries', percentage: 15 },
      { item: 'Oranges', percentage: 12 },
      { item: 'Grapefruits', percentage: 12 },
      { item: 'Rest', percentage: 2 },
    ]}
  />
</Box>
```

## Props

### colors

| Type    | Default value                |
| ------- | ---------------------------- |
| `Array` | Set of colors from the theme |

The different colors used to represent the items. If there are more items than
colors, it will rotate.

### showLegend

| Type      | Default value |
| --------- | ------------- |
| `Boolean` | `true`        |

Set to `false` to display the bar only.

### heading

| Type         | Default value |
| ------------ | ------------- |
| `React node` | None          |

An optional heading.

### itemTitle({ item, percentage, index })

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

This function gets called to generate the title attribute for each item.

### renderLegendItem({ item, percentage, index })

| Type       | Default value |
| ---------- | ------------- |
| `Function` | None          |

This function gets called to render individual items in the legend. You can
also pass a React component.

### items

| Type    | Default value   |
| ------- | --------------- |
| `Array` | None (required) |

The items represented in the distribution. Every item in the array must be an
object composed of two entries: `item`, which can be any type of value, and
`percentage`, which has to be a `Number`.

Note: the total of the percentages for all the items doesn’t have to be `100`.
The bar will get displayed properly with any total, which can be useful in
certain cases.
