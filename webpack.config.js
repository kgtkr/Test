const webpack = require("webpack");
const OfflinePlugin = require("offline-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
  entry: {
    main: [
      './src/main.tsx',
      './src/global.scss'
    ]
  },
  output: {
    filename: "[name].[chunkhash].js",
    path: __dirname + "/dist",
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.html?$/,
        loader: "html-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader?modules"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: 'public',
    port: 3000,
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true
  },
  plugins: [
    new OfflinePlugin({
      caches: {
        main: [":rest:"],
      },
      ServiceWorker: {
        output: "sw.js",
        publicPath: "/sw.js",
        cacheName: "kgtkrhp",
        minify: true,
      },
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html',
    }),
    new CleanWebpackPlugin(['dist']),
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: 'initial',
    }
  }
};