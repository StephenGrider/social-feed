const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const packageJson = require('./package.json');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: `${process.env.PRODUCTION_DOMAIN}/${packageJson.name}/latest/`,
    path: path.join(process.cwd(), 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: packageJson.name,
      filename: 'remoteEntry.js',
      remotes: {
        feed: `feed@${process.env.PRODUCTION_DOMAIN}/feed/${packageJson.devDependencies['@npegrider/feed']}/remoteEntry.js`,
      },
      exposes: {},
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
