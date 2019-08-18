# babel-plugin-aragon-ui

Plugin greatly inspired from [babel-plugin-styled-components](https://github.com/styled-components/babel-plugin-styled-components), and made to work with it.

## Features

- Adds the `gu` unit to styled component’s CSS blocks (in normal styled
  components, in the `css` prop, or using the `css` helper).
- That’s all for now.

## Installation

In your .babelrc, declare this plugin before styled-components:

```json
{
  "plugins": [
    "@aragon/babel-plugin-aragon-ui",
    "styled-components"
  ]
}
```
