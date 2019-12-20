const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const aragonUiVersion = require('../package.json').version

// See markdown-only pages declared in routes.js
const MARKDOWN_ONLY_PAGES = [
  'accordion',
  'colors',
  'float-indicator',
  'getting-started',
  'help',
  'how-to-upgrade',
  'loading-ring',
  'main',
  'search-input',
  'spacing',
  'sync-indicator',
  'tag',
  'text-styles',
]

const PUBLIC_PATH = '/'
const BASE_HTML_CONF = {
  publicUrl: PUBLIC_PATH,
  template: './public/index.html',
}

const pages = fs
  .readdirSync(path.join(__dirname, 'src/pages'))
  .map(filename =>
    filename
      .replace(/\.js$/, '')
      .replace(/^Page/, '')
      .replace(/(.)([A-Z])/g, '$1-$2')
      .toLowerCase()
  )
  .concat(MARKDOWN_ONLY_PAGES)

const htmlPages = () => {
  return pages.map(
    page =>
      new HtmlWebpackPlugin(
        Object.assign({}, BASE_HTML_CONF, { filename: `${page}/index.html` })
      )
  )
}

module.exports = (env, argv) => {
  const production = argv.mode === 'production'
  return {
    entry: [path.resolve(__dirname, 'src/index.js')],
    devtool: production ? 'source-map' : 'eval',
    devServer: {
      contentBase: [
        path.join(__dirname, '../dist'),
        path.join(__dirname, 'public'),
      ],
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        pages: path.resolve(__dirname, 'src/pages'),
        comps: path.resolve(__dirname, 'src/components'),
        src: path.resolve(__dirname, 'src'),
        '@aragon/ui': path.resolve(__dirname, '..'),
        'ui-src': path.resolve(__dirname, '../src'),
        'ui-docs': path.resolve(__dirname, '../docs'),
      },

      // Only needed because @aragon/ui is linked
      modules: [
        path.join(__dirname, 'node_modules'),
        path.join(__dirname, '../node_modules'),
      ],
    },
    optimization: {
      minimize: production,
      minimizer: [new TerserPlugin()],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              [
                'babel-plugin-styled-components',
                {
                  displayName: !production,
                },
              ],
              ['@babel/plugin-proposal-class-properties'],
            ],
          },
        },
        {
          test: /\.(png|jpg|gif|svg|woff|woff2)$/,
          use: [
            {
              loader: 'url-loader',
              options: { limit: 8192 },
            },
          ],
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ],
    },
    plugins: (() => {
      let plugins = [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(BASE_HTML_CONF),

        // These constants should only get used from src/environment.js
        new webpack.DefinePlugin({
          ARAGON_UI_PATH: JSON.stringify(production ? '/aragon-ui/' : '/'),
          ARAGON_UI_VERSION: JSON.stringify(aragonUiVersion),
          PUBLIC_PATH: JSON.stringify(PUBLIC_PATH),
        }),
      ]

      if (production) {
        plugins = plugins.concat([new CompressionPlugin()]).concat(htmlPages())
      }
      return plugins
    })(),
    output: {
      publicPath: PUBLIC_PATH,
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }
}
