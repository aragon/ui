# PublicUrl

PublicURL is used to access your local path to aragonUI’s assets (e.g. fonts, etc.), so they load properly. It is mostly used internally.

## Usage

```jsx
import { PublicUrl } from '@tecommons/ui'

function App() {
  return (
    <PublicUrl>
      {url => (
        <img src={`${url}/example.png`} />
      )}
    </PublicUrl>
  )
}
```
