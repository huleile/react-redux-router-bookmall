/**
 * @Author: hully
 * @Date:   2017-09-02 13:19:51
 * @Email:  hull@docy.co
 * @Last modified by:   hully
 * @Last modified time: 2017-09-08 11:13:55
 */
"use strict";
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "eval-source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:6070",
    "webpack/hot/only-dev-server",
    "react-hot-loader/patch",
    `${__dirname}/src/index.js`
  ],
  output: {
    path: `${__dirname}/build`,
    filename: '[name].min.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".less"]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有, 翻版必究'),
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      filename: 'index.html',
      favicon: './src/public/images/favicon.ico'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif)/,
        loader: "url-loader",
        options: {
          limit: 8192
        }
      }
    ]
  }
}
