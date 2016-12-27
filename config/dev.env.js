var merge = require('webpack-merge');
var prodEnv = require('./prod.env');
var webpack = require('webpack');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  plugins: [
    new webpack.BannerPlugin('this is banner file'),
  ]
})
