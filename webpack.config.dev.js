const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader', 
          'css-loader', 
          { 
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer()
              ]
            }
          },
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'public/dist')]),
    new webpack.HotModuleReplacementPlugin()
  ]
}