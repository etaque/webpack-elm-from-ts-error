'use strict';

module.exports = {
  entry: [
    './src/index.ts'
  ],
  output: {
    filename: './bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.elm']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: 'elm-webpack-loader'
      }
    ]
  }
};
