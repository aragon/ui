# Viewport

The Viewport component can be used to get some information about the app
window. It provides the viewport dimensions and a set of convenient functions
to help building responsive apps.

## Usage

```jsx
import { useViewport } from '@aragon/ui'

const MyComponent = () => {
  const { within, below, above } = useViewport()

  return (
    <div>
      {below('medium') && <div>small</div>}
      {within('medium', 'large') && <div>medium</div>}
      {above('large') && <div>large</div>}
    </div>
  )
}
```

### Render prop

```jsx
import { Viewport } from '@aragon/ui'

const MyComponent = () => {
  return (
    <Viewport>
      {({ within, below, above }) => (
        <div>
          {below('medium') && <div>small</div>}
          {within('medium', 'large') && <div>medium</div>}
          {above('large') && <div>large</div>}
        </div>
      )}
    </Viewport>
  )
}
```

## Properties

### `throttle`

- Type: `Number`
- Default value: `100`

Change the throttle wait time.

### `children`

- Type: `Function`

A render prop that provides an object with everything needed. An object is passed to the function, with the following properties:

#### `width`

- Type: `Number`

The current width of the viewport.

##### Example:

```jsx
const { width } = useViewport()
return <MyComponent compact={width < 400} />
```

#### `height`

- Type: `Number`

The current height of the viewport.

#### `within(min, max)`

- Type: `Function`

Returns `true` if the viewport `width` is between `min` and `max`, `false` otherwise. `min` is included while `max` is excluded. This is to prevent collisions between two breakpoints (see example).

`min` and `max` can be any number, or one of the available breakpoints (see `breakpoint` below).

If `-1` is passed as either `min` or `max`, there will be no minimum or maximum. Note: see `above()` and `below()` for a more concise way to do this.

##### Example:

```jsx
const { within } = useViewport()
return (
  <div>
    <p>{within(400, 500) ? 'viewport width within 400 and 500' : 'nope'}</p>
    {within('min', 'small') && <div>A</div>}
    {within('small', 'medium') && <div>B</div>}
    {within('medium', 'large') && <div>C</div>}
    {within('large', -1) && <div>D</div>}
  </div>
)
```

#### `above(x)`

- Type: `Function`

Returns `true` if the viewport `width` is above `x`, `false` otherwise.

`x` can be any number, or one of the available breakpoints (see `breakpoint` below).

#### `below(x)`

Returns `true` if the viewport `width` is below `x`, `false` otherwise.

`x` can be any number, or one of the available breakpoints (see `breakpoint` below).

##### Example:

```jsx
const { below, above } = useViewport()
return (
  <div>
    {above('medium') && <div>A</div>}
    {below('medium') && <div>B</div>}
  </div>
)
```

#### `breakpoint`

An object that contains the number values of the different recommended breakpoints. It can be useful to set these values in CSS, for example.

Available breakpoints: `"min"` (320), `"small"` (540), `"medium"` (768), `"large"` (1170).

##### Example:

```jsx
const { breakpoint } = useViewport()
return (
  <div css={`min-width: ${breakpoint.min}`}>
    <MyComponent compact={width < breakpoint.medium} />
  </div>
)
```
