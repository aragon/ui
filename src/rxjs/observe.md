# observe

A HOC for convenient subscriptions to RxJS observables.

`observe(Component, observe, initialState = {}) -> ObservedComponent`

Automatically subscribes to the resulting Observable returned by `observe`, passing down its state values as props to the given `Component`.

## Usage

```jsx
import { observe } from '@aragon/ui'
import { Observable } from 'rxjs'

class App extends React.Component {
  constructor() {
    super()
    this.observable = Observable.from([1, 2, 3])
  }
  render() {
    <Observed observable={this.observable} propValue={0} />
  }
}

const ReceivingComponent = ({ propValue, value }) => (
  <div>
    <p>
      The observable's current value: {value}
    </p>
    <p>
      The passed down prop's value: {propValue}
    </p>
  </div>
)

const Observed = observe(
  ReceivingComponent,
  observable => observable.map(value => {
     return { value }
  }),
  { value: 0 }
)
```

## Signature

`observe(Component, observe, initialState = {}) -> ObservedComponent`

- `Component`: Any `React.Node`
- `observe`: A function that receives the Observable as input. Must return an Observable whose event values will be used as the passed down state
- `initialState: The initial state to use

## `ObservedComponent`'s Properties

### `observable`

- Type: `RxJS.Observable`

The Observable to be used in `observe`

## `ObservedComponent`'s Added Properties to `Component`

### `{...state}`

Any state returned by `observe`'s Observable is spread and added to `Component`'s props.

### `subscription`

- Type: `RxJS.Subscription`

The Subscription object to `observe`'s Observable (useful if you'd like to unsubscribe prematurely).

### `*`

All other props will be passed down to `Component`.
