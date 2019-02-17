const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')

function base() {
  return {
    entry: { app: './index.js' },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' },
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({ title: 'devbox' })],
  }
}

function production() {
  const config = base()
  return {
    ...config,
    mode: 'production',
    devtool: 'source-map',
    plugins: [
      ...config.plugins,
      new CleanWebpackPlugin(['dist']),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'bundle-report.html',
        openAnalyzer: false,
      }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({ cache: true, parallel: true, sourceMap: true }),
      ],
    },
  }
}

function development() {
  const config = base()
  return {
    ...config,
    mode: 'development',
    devtool: 'cheap-module-source-map',
    module: {
      ...config.module,
      rules: config.module.rules.map(rule => {
        if (rule.test.toString() !== '/\\.js$/') {
          return rule
        }
        return {
          ...rule,
          use: {
            ...rule.use,
            options: {
              cacheDirectory: true,
            },
          },
        }
      }),
    },
    performance: { hints: false },
  }
}

function devserver() {
  const config = development()
  return {
    ...config,
    devServer: { contentBase: './dist' },
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    return production()
  }
  if (argv.mode === 'development') {
    return argv['$0'].endsWith('webpack-dev-server')
      ? devserver()
      : development()
  }
}
