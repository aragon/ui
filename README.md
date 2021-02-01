## Overview

This library is a fork from aragonUI library used to build user interfaces.
The theme of the library was customized for being used in the TokenEngineer projects from now on.
It provides the components needed to build experiences that feel integrated with TEC ecosystem, and can be used both client or server side.

The complete documentation can be found on the [aragonUI website](https://ui.aragon.org/).

## Getting Started

If you are unfamiliar with aragonUI, we recommend you to start with the [getting started page](https://ui.aragon.org/getting-started/). If you only want to know how to add aragonUI to your project, have a look at the quick setup:

### Quick setup

Install tecUI alongside styled-components from npm::

```sh
npm install --save @tecommons/ui styled-components
```

Copy its assets into your public directory:

```sh
npx copy-aragon-ui-assets ./public
```

Wrap your app with the `Main` component:

```jsx
import React from 'react'
import { Main } from '@tecommons/ui'

function App() {
  return (
    <Main>
      <h1>Hello aragonUI!</h1>
    </Main>
  )
}
```

_Your project is now ready to use TEC-UI. 💫_

Open https://ui.aragon.org/ to see the list of the available components and learn how to use them.

### Assets

TEC-UI require some assets (e.g. fonts) in order to work properly. These need to be copied where they can be accessed by the library, like the `public/` directory of a project using [Create React App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-assets-outside-of-the-module-system).

Copy these assets using the provided `copy-aragon-ui-assets` command:

```sh
npx copy-aragon-ui-assets ./public
```

By default, it will create a directory named `aragon-ui` in the specified directory.

This emplacement is communicated to the library through the `<Main>` component. The default path is `./aragon-ui/`, but you can change it using the `assetsUrl` prop:

```jsx
import { Main } from '@tecommons/ui'

const App = () => (
  <Main assetsUrl="http://example.com/aragon-ui-assets/">
    <h1>Hello aragonUI!</h1>
  </Main>
)
```

You may also want to add it as a build step in your project, so that tecUI can be upgraded without having to worry about this.

```json
"scripts": {
  "sync-assets": "copy-aragon-ui-assets ./public",
  "build": "npm run sync-assets && react-scripts build",
  "start": "npm run sync-assets && react-scripts start"
}
```

See `copy-aragon-ui-assets -h` for more information.

## Build and Develop

Please have a look at [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT, see [LICENSE](LICENSE).
