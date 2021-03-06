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
            'css-loader?minimize=true', 
            { 
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  autoprefixer({
                    browsers: ['last 3 versions', 'Android >= 4.0', 'iOS 7', '> 5%']
                  })
                ]
              }
            },
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader?outputPath=img/']
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          minimize: true
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({ //加载jq
      $: 'jquery',
      jQuery: "jquery"
    }),
    new CleanWebpackPlugin([path.resolve(__dirname, 'public/dist')]),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new ExtractTextPlugin('css/[name].css')
  ]
}