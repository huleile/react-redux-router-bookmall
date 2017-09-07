/**
 * @Author: hully
 * @Date:   2017-09-06 10:08:07
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-06 11:16:07
 */
"use strict";
let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let CONFIG = require('./webpack.config');

const port = 6070;
const host = 'localhost';

new WebpackDevServer(webpack(CONFIG), {
  publicPath: CONFIG.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    timings: false,
    hash: false,
    chunks: false,
    chunkModules: false
  }
}).listen(port, host, (err) => {
  if(err) console.log(err);
  console.log(`Listening at ${host}:${port}`);
});
