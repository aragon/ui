const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

function base(env) {
  const envKeys = {}
  for (let key in env) {
    envKeys[`process.env.${key}`] = JSON.stringify(env[key])
  }

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
        {
          test: /\.(png|svg|jpg)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new HtmlWebpackPlugin({
        title: 'devbox',
        meta: {
          viewport:
            'width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no',
        },
      }),
    ],
  }
}

function production(env) {
  const config = base(env)
  return {
    ...config,
    mode: 'production',
    devtool: 'source-map',
    plugins: [
      ...config.plugins,
      new CleanWebpackPlugin(),
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

function development(env) {
  const config = base(env)
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

function devserver(env) {
  const config = development(env)
  return {
    ...config,
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
    },
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    return production(env)
  }
  if (argv.mode === 'development') {
    return argv['$0'].endsWith('webpack-dev-server')
      ? devserver(env)
      : development(env)
  }
}
