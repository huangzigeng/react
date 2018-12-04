/**
 * Created by Administrator on 2018/12/4.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let htmlWebpackPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.resolve(__dirname, './src/index.html')
});

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 1111,
    open: true
  },
  plugins:[
    htmlWebpackPlugin
  ],
  module: {
    rules: [
      {
        test:/\.js|jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react']
            }
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  }
}