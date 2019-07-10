# PublicUrl

PublicURL is used to declare your local path to aragonUI's assets (e.g. fonts, etc.), so they load properly. It is mostly used internally.

## Usage

```jsx
import { PublicUrl } from '@aragon/ui'
import styled from 'styled-components'

const App = () =>     
            <StyledComponent />

            const StyledComponent = PublicUrl.hocWrap(styled.h1`
              padding-right: 20px;
`)
```
