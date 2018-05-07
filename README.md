# Aragon UI
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Faragon%2Faragon-ui.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Faragon%2Faragon-ui?ref=badge_shield)


Aragon UI is the interface toolkit used by Aragon and its related projects.

## How to import

Aragon UI is a library that comes with some assets, like fonts or images. These
need to be copied where Aragon UI can access them.

This emplacement can then be communicated to Aragon UI using the global
component `<AragonApp />`:

```jsx
import { AragonApp } from '@aragon/ui'

const App = () => (
  <AragonApp publicUrl="/">
    {/* Your app goes here */}
  </AragonApp>
)
```

To get the path of the directory from where the assets need to be copied, use
`path.dirname(require.resolve('@aragon/ui'))`.

### `create-react-app`

If you're using [`create-react-app`](https://github.com/facebookincubator/create-react-app)
or [`react-scripts`](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts),
you can copy over the contents of module's `dist/` folder (i.e.
`path.dirname(require.resolve('@aragon/ui'))`) to
a [`public/aragon-ui`](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-assets-outside-of-the-module-system)
folder in your app and then use `publicUrl="/aragon-ui/`.

You may also want to add this sync step to your build scripts, in case you
later upgrade this package (make sure to `npm i -D sync-assets first):

```json
"scripts": {
    "sync-assets": "sync-files $(dirname $(node -p 'require.resolve(\"@aragon/ui\")')) public/aragon-ui",
    "build": "npm run sync-assets && react-scripts build",
    "start": "npm run sync-assets && react-scripts start"
}
```

### Copy Webpack Plugin

If you have your own webpack configuration, a way to copy this package's assets
is to use the [Copy Webpack Plugin](https://github.com/webpack-contrib/copy-webpack-plugin):

```js
module.exports = {
  /* … */

  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.dirname(require.resolve('@aragon/ui')),
        to: path.resolve(
          path.join(__dirname, 'dist/public')
        ),
      },
    ]),
  ]
}
```

### webpack DevServer

For [webpack DevServer](https://webpack.js.org/configuration/dev-server/), add
the Aragon UI directory to the `contentBase` array, without having to copy it:

```js
module.exports = {
  /* … */

  devServer: {
    contentBase: [
      path.dirname(require.resolve('@aragon/ui')),
      path.join(__dirname, 'public'),
    ],
  },
}
```

## Develop

Install the dependencies:

```sh
npm install
```

Build Aragon UI:

```sh
npm run build # or "npm run dev" to rebuild when a file has changed
```


Run the gallery:

```sh
npm start
```

Open <http://localhost:8080/> in your web browser.


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Faragon%2Faragon-ui.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Faragon%2Faragon-ui?ref=badge_large)