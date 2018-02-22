# RadioGroup

A convenience container for a group of radio buttons.

Automatically passes down the child's index.

## Usage

```jsx
import { Component } from 'react'
import { RadioInput, RadioGroup } from '@aragon/ui'

const items = ['First', 'Second', 'Third']

class App extends Component {
  state = {
    selected: 0,
    value: '',
  }
  handleChange = event => {
    this.setState({ value: event.target.value })
  }
  handleSelect = selected => {
    this.setState({ selected })
  }
  render() {
    const { selected } = this.state
    return (
      <RadioGroup
        name="group"
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {RADIO_LABELS.map((label, i) => {
          const radioValue = label.toLowerCase()
          return (
            <Label key={i} label={label}>
              <RadioInput
                inline
                checked={i === selected}
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

All other props will be passed into the children (e.g. [`<RadioInput />`](../radio-input/)s).

Setting the props directly on the `<RadioGroup />` is the same as setting the same props on each
child. The following approaches are all equivalent:

```jsx
<RadioGroup
  name="group"
  onChange={this.handleChange}
  onSelect={this.handleSelect}
>
  {RADIO_LABELS.map((label, i) => {
    const radioValue = label.toLowerCase()
    return (
      <label>
        <RadioInput checked={i === selected} value={radioValue} />
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
        <RadioInput
          checked={i === selected}
          name="group"
          onChange={this.handleChange}
          onSelect={this.handleSelect}
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
    <RadioInput
      checked={0 === selected}
      index={0}
      name="group"
      onChange={this.handleChange}
      onSelect={this.handleSelect}
      value="first"
    />
    First
  </label>
  <label>
    <RadioInput
      checked={1 === selected}
      index={1}
      name="group"
      onChange={this.handleChange}
      onSelect={this.handleSelect}
      value="second"
    />
    Second
  </label>
  <label>
    <RadioInput
      checked={2 === selected}
      index={2}
      name="group"
      onChange={this.handleChange}
      onSelect={this.handleSelect}
      value="third"
    />
    Third
  </label>
</RadioGroup>
```
