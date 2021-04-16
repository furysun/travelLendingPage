const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, '.'),
    port: 4200

  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: 'index.html'
    }),

    new CopyPlugin({
      patterns: [
        {from: "img", to: "img"},
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        options: {
          name: "[name].[ext]",
          outputPath: "img/"
        },
        loader: "file-loader",
      }
    ]
  }
};