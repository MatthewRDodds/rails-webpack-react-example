const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./entry.jsx",
  output: {
    path: path.join(__dirname, '../', 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
