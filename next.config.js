const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  getGlobalCssLoader,
} = require('next/dist/build/webpack/config/blocks/css/loaders');
const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(svg)$/,
      include: path.resolve(__dirname, 'assets/svg'),
      loader: 'svg-react-loader',
    });

    config.module.rules.push({
      test: /\.css$/,
      sideEffects: true,
      use: dev
        ? getGlobalCssLoader(
            {
              assetPrefix: config.assetPrefix,
              future: {
                webpack5: true,
              },
              isClient: !isServer,
              isServer,
              isDevelopment: dev,
            },
            [() => {}],
          )
        : [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
          ],
    });

    config.plugins.push(new VanillaExtractPlugin());

    if (!dev) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[contenthash].css',
          chunkFilename: 'static/css/[contenthash].css',
          ignoreOrder: true,
        }),
      );
    }

    return config;
  },
};
