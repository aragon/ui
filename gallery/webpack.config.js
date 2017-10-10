const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV
const IS_PRODUCTION = NODE_ENV === 'production'

module.exports = {
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
  },
  module: require('../webpack.config').module,
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      comps: path.resolve(__dirname, 'src/comps/'),
      ui: path.resolve(__dirname, '..'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
    }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({ title: 'Aragon Toolkit Gallery' }),
  ],
  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
