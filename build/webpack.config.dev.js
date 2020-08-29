const webpack = require('webpack');
const { merge } = require("webpack-merge");
const commonConfig = require('./webpack.config.common');

const { HotModuleReplacementPlugin } = webpack;

const devConfig = {
  mode: 'development',
  // mode: 'production',
  devtool: 'cheap-module-eval-source-map',  // 开发环境最佳实践
  // devtool: 'cheap-module-source-map',       // 生产环境最佳实践
  devServer: {
    contentBase: '../dist',
    open: true,
    hot: true,      // 开启模块热更新
    // hotOnly: true   // 即使模块热更新的功能如果没有生效，也不让浏览器重载页面
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [    // loader的处理顺序是从下往上 or 从右往左
          'style-loader',
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
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
}

module.exports = merge(commonConfig, devConfig);