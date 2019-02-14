const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

const DIST_FOLDER = path.join(__dirname, 'dist');

module.exports = {
  entry: './src/index.js',
  output: {
    path: DIST_FOLDER,
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      title: 'React Basic Env Template',
      template: htmlWebpackTemplate,
      appMountId: 'app',
    }),
    new CleanWebpackPlugin(DIST_FOLDER),
  ],
};
