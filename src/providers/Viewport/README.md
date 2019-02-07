# Viewport

The Viewport components can be used to get informations about the app window.

## Usage

```jsx
<Viewport>
  {({ within, below, above }) => (
    <div>
      {below('medium') && <div>small</div>}
      {within('medium', 'large') && <div>medium</div>}
      {above('large') && <div>large</div>}
    </div>
  )}
</Viewport>
```

## Properties

### `throttleWait`

- Type: `Number`
- Default value: `100`

Increase the throttle wait time by changing this value.

### `children`

- Type: `Function`

A render prop that provides an object with everything needed. An object is passed to the function, with the following properties:

#### `width`

- Type: `Number`

The current width of the viewport.

##### Example:

```jsx
<Viewport>
  {({ width }) => (
    <MyComponent compact={width < 400} />
  )}
</Viewport>
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
<Viewport>
  {({ within }) => (
    <div>
      <p>
        {within(400, 500) ? 'viewport width within 400 and 500' : 'nope'}
      </p>
      {within('min', 'small') && <div>A</div>}
      {within('small', 'medium') && <div>B</div>}
      {within('medium', 'large') && <div>C</div>}
      {within('large', -1) && <div>D</div>}
    </div>
  )}
</Viewport>
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
<Viewport>
  {({ below, above }) => (
    <div>
      {above('medium') && <div>A</div>}
      {below('medium') && <div>B</div>}
    </div>
  )}
</Viewport>
```


#### `breakpoint`

An object that contains the number values of the different recommended breakpoints. It can be useful to set these values in CSS, for example.

Available breakpoints: `"min"` (320), `"small"` (540), `"medium"` (768), `"large"` (1170).

##### Example:

```jsx
<Viewport>
  {({ width, breakpoint }) => (
    <div css={`min-width: ${breakpoint.min}`}>
      <MyComponent compact={width < breakpoint.medium} />
    </div>
  )}
</Viewport>
```

