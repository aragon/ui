# Text styles

Text styles provided by aragonUI can be used through the `textStyle()` utility, which returns a series of CSS declarations corresponding to the desired text style.

The CSS properties can include any of the following, depending on the requested style:

- `font-size`
- `font-family`
- `font-weight`
- `text-transform`
- `line-height`

## Usage

```jsx
import { Main, textStyle } from '@tecommons/ui'

function App() {
  return (
    <div
      css={`
        ${textStyle('body3')};
      `}
    >
      Body 3 text style
    </div>
  )
}
```
