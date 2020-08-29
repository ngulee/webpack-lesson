const express = require('express');
const webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.dev');
const complier = webpack(config);

const app = express();

app.use(
  WebpackDevMiddleware(complier, {
    publicPath: config.output.publicPath
  })
)

app.listen(8080, () => {
  console.log('Server is running in http://localhost:8080')
})