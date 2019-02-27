# Aragon UI

<p align=center>
  <img src="https://user-images.githubusercontent.com/36158/40653789-19f2d150-6334-11e8-9f78-8b32648698b4.png" alt="">
</p>

## What is it?

Aragon UI is a React library used to build user interfaces for Aragon and its related projects. It provides the components needed to build experiences that feel integrated with Aragon ecosystem, and can be used both client or server side.

Used by:

- [Aragon](https://github.com/aragon/aragon)
- [Aragon apps by the core team](https://github.com/aragon/aragon-apps)
- [aragon.org](https://aragon.org/)
- [hack.aragon.org](https://hack.aragon.org/)

## Getting Started

### Quick setup

Install it from npm:

```sh
npm install --save @aragon/ui
```

Copy its assets into your public directory:

```sh
npx copy-aragon-ui-assets ./public
```

Wrap your app with the `Main` component:

```jsx
import { Main } from '@aragon/ui'

const App = () => (
  <Main>
    <h1>Hello Aragon UI!</h1>
  </Main>
)
```

*Your project is now ready to use Aragon UI. 💫*

Open https://ui.aragon.org/ to see the list of the available components and learn how to use them.

### Assets

Aragon UI require some assets (e.g. fonts) in order to work properly. These need to be copied where they can be accessed by the library, like the `public/` directory of a project using [Create React App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-assets-outside-of-the-module-system).

Copy these assets using the provided `copy-aragon-ui-assets` command:

```sh
npx copy-aragon-ui-assets ./public
```

By default, it will create a directory named `aragon-ui` in the specified directory.

This emplacement is communicated to the library through the `<Main>` component. The default path is `./aragon-ui/`, but you can change it using the `assetsUrl` prop:

```jsx
import { Main } from '@aragon/ui'

const App = () => (
  <Main assetsUrl="http://example.com/aragon-ui-assets/">
    <h1>Hello Aragon UI!</h1>
  </Main>
)
```

You may also want to add it as a build step in your project, so that Aragon UI can be upgraded without having to worry about this.

```json
"scripts": {
  "sync-assets": "copy-aragon-ui-assets ./public",
  "build": "npm run sync-assets && react-scripts build",
  "start": "npm run sync-assets && react-scripts start"
}
```

See `copy-aragon-ui-assets -h` for more information.

## Build & Develop

Clone this repository, install the dependencies:

```sh
npm install
```

Build:

```sh
npm run build
```

Auto rebuild:

```sh
npm run dev
```

Run the devbox (to develop a component in isolation):

```sh
cd devbox
npm install
npm start
```

## License

MIT, see [LICENSE](LICENSE).
