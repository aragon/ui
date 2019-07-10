# BaseStyles

BaseStyles is the base css stylesheet injected into the page for aragonUI, to "reset / normalize" any behaviours. It is used by default as part of the component `Main`.\
It is based on the Theme component's [pallete](/theme/).

## Usage

```jsx
import { BaseStyles } from '@aragon/ui'

const Main = ({ children, assetsUrl, legacyFonts }) => (
  <Root.Provider>
    <Viewport.Provider>
      <PublicUrl.Provider url={ensureTrailingSlash(assetsUrl)}>
        <BaseStyles enableLegacyFonts={legacyFonts} />
        <ToastHub>{children}</ToastHub>
      </PublicUrl.Provider>
    </Viewport.Provider>
  </Root.Provider>
)
```

## Properties

### `body`

Default attributes for body.

```
  body {
    height: 0;
    min-height: 100vh;
    font-family: ${props => props.fontFamily};
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.textPrimary};
    background: ${theme.mainBackground};
  }
```

