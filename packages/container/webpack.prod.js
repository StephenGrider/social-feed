const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const packageJson = require('./package.json');
const commonConfig = require('./webpack.common');

const DOMAIN = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: `${DOMAIN}/${packageJson.name}/latest/`,
    path: path.join(process.cwd(), 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      remotes: {
        npegriderfeed: `npegriderfeed@${DOMAIN}/npegriderfeed/${packageJson.devDependencies['@npegrider/feed']}/remoteEntry.js`,
      },
      exposes: {},
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
