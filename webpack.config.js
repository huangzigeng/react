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
  mode: 'development', // 开发模式
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包输出地址
    filename: 'main.js' // 输出文件名
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 1111,
    open: true // 是否打开浏览器
  },
  plugins:[
    htmlWebpackPlugin
  ],
  module: {
    rules: [
      {
        test:/\.js|jsx$/, //配置jsx/js支持 需要安装babel相关插件
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
        test: /\.scss$/,// 配置scss支持 需要先安装node-sass
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  }
}