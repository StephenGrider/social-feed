const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { normalizeName } = require('./webpack-utils');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const name = normalizeName(packageJson.name);

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8081/',
  },
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './ProductsApp': './src/main',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
