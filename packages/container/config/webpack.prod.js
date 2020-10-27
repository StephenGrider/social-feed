const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const {
  normalizeName,
  buildProdRemote,
  buildProdPublicPath,
} = require('./webpack-utils');
const packageJson = require('../package.json');
const commonConfig = require('./webpack.common');

const domain = process.env.PRODUCTION_DOMAIN;
const name = normalizeName(packageJson.name);

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: buildProdPublicPath({ domain, name, version: 'latest' }),
    path: path.join(process.cwd(), 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: name,
      filename: 'remoteEntry.js',
      remotes: [
        {
          name: '@npegrider/cart',
          version: packageJson.dependencies['@npegrider/cart'],
          domain,
          fileName: 'remoteEntry.js',
        },
        {
          name: '@npegrider/products',
          version: packageJson.dependencies['@npegrider/products'],
          domain,
          fileName: 'remoteEntry.js',
        },
      ].map(buildProdRemote),
      exposes: {},
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
