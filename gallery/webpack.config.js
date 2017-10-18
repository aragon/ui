const webpack = require('webpack')
const fs = require('fs')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMonitor = require('webpack-monitor')
const uiWebpackBase = require('../webpack-base')

const PRODUCTION = process.env.NODE_ENV === 'production'
const BASE_HTML_CONF = { title: 'Aragon UI', favicon: './favicon.svg' }

const PUBLIC_PATH = PRODUCTION ? '/aragon-ui/' : '/'

const pages = fs
  .readdirSync(path.join(__dirname, 'src/pages'))
  .filter(filename => filename.endsWith('.vue'))
  .map(filename => filename.replace(/\.vue$/, ''))

const htmlPages = () => {
  return pages.map(
    page =>
      new HtmlWebpackPlugin(
        Object.assign({}, BASE_HTML_CONF, { filename: `${page}/index.html` })
      )
  )
}

module.exports = uiWebpackBase(webpack, __dirname, {
  entry: [path.resolve(__dirname, 'src/index.js')],
  devtool: 'eval',
  devServer: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      comps: path.resolve(__dirname, 'src/comps'),
      src: path.resolve(__dirname, 'src'),
      '@aragon/ui': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
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
      new CleanWebpackPlugin(['dist']),
      new webpack.DefinePlugin({
        PUBLIC_PATH: JSON.stringify(PUBLIC_PATH),
      }),
      new HtmlWebpackPlugin(BASE_HTML_CONF),
    ]

    if (PRODUCTION) {
      plugins = plugins
        .concat([
          new webpack.optimize.UglifyJsPlugin({ parallel: true }),
          new CompressionPlugin(),
          new ExtractTextPlugin('styles.css'),
          new WebpackMonitor({ launch: !!process.env.INSPECT_BUNDLE }),
        ])
        .concat(htmlPages())
    }
    return plugins
  })(),
  output: {
    publicPath: PUBLIC_PATH,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
})
