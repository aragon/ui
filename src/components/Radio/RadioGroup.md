# RadioGroup

A convenience container for a group of radio buttons.

## Usage

```jsx
import { Component } from 'react'
import { RadioButton, RadioGroup } from '@aragon/ui'

const items = ['First', 'Second', 'Third']

class App extends Component {
  state = {
    value: '',
  }
  handleChange = event => {
    this.setState({ value: event.target.value })
  }
  render() {
    const { value } = this.state
    return (
      <RadioGroup name="group" onChange={this.handleChange}>
        {RADIO_LABELS.map((label, i) => {
          const radioValue = label.toLowerCase()
          return (
            <Label key={i} label={label}>
              <RadioButton
                inline
                checked={radioValue === value}
                value={radioValue}
              />
            </Label>
          )
        })}
      </RadioGroup>
    )
  }
}

const Label = ({ children, label, ...props }) => (
  <label>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        ...props,
      })
    )}
    {label}
  </label>
)
```

## Properties

### `className`

- Type: `String`

Sets the class name of the `radiogroup` container.

### `*`

All other props will be passed into the children (e.g. [`<RadioButton />`](../radio-button/)s).

Setting the props directly on the `<RadioGroup />` is the same as setting the same props on each
child. The following approaches are all equivalent:

```jsx
<RadioGroup name="group" onChange={this.handleChange}>
  {RADIO_LABELS.map((label, i) => {
    const radioValue = label.toLowerCase()
    return (
      <label>
        <RadioButton checked={radioValue === value} value={radioValue} />
        {label}
      </label>
    )
  })}
</RadioGroup>
```

```jsx
<RadioGroup>
  {RADIO_LABELS.map((label, i) => {
    const radioValue = label.toLowerCase()
    return (
      <label>
        <RadioButton
          checked={radioValue === value}
          name="group"
          onChange={this.handleChange}
          value={radioValue}
        />
        {label}
      </label>
    )
  })}
</RadioGroup>
```

```jsx
<RadioGroup>
  <label>
    <RadioButton
      checked={'first' === value}
      index={0}
      name="group"
      onChange={this.handleChange}
      value="first"
    />
    First
  </label>
  <label>
    <RadioButton
      checked={'second' === value}
      index={1}
      name="group"
      onChange={this.handleChange}
      value="second"
    />
    Second
  </label>
  <label>
    <RadioButton
      checked={'third' === value}
      index={2}
      name="group"
      onChange={this.handleChange}
      value="third"
    />
    Third
  </label>
</RadioGroup>
```
