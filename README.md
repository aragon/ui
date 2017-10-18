# Aragon UI

Aragon UI is the interface toolkit used by Aragon and its related projects.

## Develop

Install the dependencies:

```sh
npm install
```

Run the gallery:

```sh
npm start
```

Open <http://localhost:8080/> in your web browser.

## Include in a project

`@aragon/ui` need to be transpiled by your project, using webpack. This is
needed to ensure that only the required components are present in your project,
and that no dependencies exist twice. It also facilitates exporting the assets
associated with the components (styles, images, fonts).

Start by adding `@aragon/ui` to your project `package.json`:

```json
"dependencies": {
  "@aragon/ui": "*"
}
```

Install the runtime dependencies:

```sh
npm install --save vue vue-motion
```

Install the build dependencies:

```sh
npm install --save-dev webpack babel-core babel-loader babel-preset-env css-loader file-loader url-loader vue-loader vue-template-compiler
```

You can now create your `webpack.config.js` file using the `webpack-base` module.

Simple webpack configuration for a project:

```javascript
// webpack.config.js
const path = require('path')
const webpack = require('webpack')
const uiWebpackBase = require('@aragon/ui/webpack-base')

// Pass webpack, the current directory,
// and your own webpack configuration to uiWebpackBase().
module.exports = uiWebpackBase(webpack, __dirname, {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
})
```
