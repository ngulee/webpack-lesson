const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const prodConfig = {
  // mode: 'development',
  mode: 'production',
  // devtool: 'cheap-module-eval-source-map',  // 开发环境最佳实践
  devtool: 'cheap-module-source-map',       // 生产环境最佳实践,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [    // loader的处理顺序是从下往上 or 从右往左
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 0,
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [    // loader的处理顺序是从下往上 or 从右往左
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}

module.exports = merge(commonConfig, prodConfig);