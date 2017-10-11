const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.js$/, use: ["babel-loader"] },
      { test: /\.ts$/, exclude: /node_modules/, use: ["ts-loader"] }
    ]
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ],
  devServer: {
    contentBase: './dist'
  }
}