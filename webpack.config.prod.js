const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'public/dist')]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new ExtractTextPlugin('[name].css'),  
  ]
}