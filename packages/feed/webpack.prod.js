const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const packageJson = require('./package.json');
const commonConfig = require('./webpack.common');

const packageName = packageJson.name;
const packageVersion = packageJson.version;

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: `${process.env.PRODUCTION_DOMAIN}/${packageName}/${packageVersion}/`,
    path: path.join(process.cwd(), 'dist'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: packageName,
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './FeedApp': './src/App',
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
