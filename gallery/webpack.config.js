const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMonitor = require('webpack-monitor');
const uiWebpackBase = require('../webpack-base')

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
      new HtmlWebpackPlugin({ title: 'Aragon UI', favicon: './favicon.svg' }),
    ]
    if (process.env.NODE_ENV === 'production') {
      plugins = plugins.concat([
        new webpack.optimize.UglifyJsPlugin({ parallel: true }),
        new CompressionPlugin(),
        new ExtractTextPlugin('styles.css'),
        new WebpackMonitor({ launch: !!process.env.INSPECT_BUNDLE }),
      ])
    }
    return plugins
  })(),
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
})
