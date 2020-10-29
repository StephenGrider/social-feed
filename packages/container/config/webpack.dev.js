const { merge } = require('webpack-merge');
const { normalizeName, buildDevRemote } = require('./webpack-utils');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: normalizeName(packageJson.name),
      filename: 'remoteEntry.js',
      remotes: [
        {
          name: '@npegrider/products',
          domain: 'http://localhost:8081',
        },
        {
          name: '@npegrider/cart',
          domain: 'http://localhost:8082',
        },
        {
          name: '@npegrider/dashboard',
          domain: 'http://localhost:8083',
        },
      ].map(buildDevRemote),
      exposes: {},
      // shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
