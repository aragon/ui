# observe

A HOC for convenient subscriptions to RxJS observables.

`observe(observe, initialState = {}) -> (Component) -> ObservedComponent`

Automatically subscribes to the `Observable` returned by `observe`, passing down its state values as props to the given `Component`.

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
  observable => observable.map(value => {
     return { value }
  }),
  { value: 0 }
)(ReceivingComponent)
```

## Signature

`observe(observeFn, initialState = {}) -> (Component) -> ObservedComponent`

- `Component`: Any `React.Node`
- `observeFn`: A function (`Observable -> Observable`) that receives the `Observable` as input. Must return an `Observable` whose streamed values will be passed down as destructured props.
- `initialState: The initial state to pass down as destructured props

## `ObservedComponent`'s Properties

### `observable`

- Type: `RxJS.Observable`

The `Observable` to be used in `observe`. Can be initially empty.

This `Observable` is modifiable while the component is still mounted. The component will automatically unsubscribe from the old `Observable` and subscribe to the new `Observable` using the `observeFn`.

## `Component`'s Injected Properties

### `{...state}`

Any state streamed by `observeFn`'s returned `Observable` is destructured and added to `Component`'s props.

### `subscription`

- Type: `RxJS.Subscription`

The `Subscription` of `observeFn`'s returned `Observable` (useful if `Component` would like to unsubscribe prematurely). Note that this will not be injected until an `Observable` is passed into the wrapped component.

### `*`

All other props will be passed down to `Component`.
