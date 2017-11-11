var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './src/main.tsx'
  ],
  output: {
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx', ".css", ".scss"]
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
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
    historyApiFallback: {
      index: 'index.html'
    }
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: 'public/index.html',
      to: '404.html'
    }]),
  ],
};