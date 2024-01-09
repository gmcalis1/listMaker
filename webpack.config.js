const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
    ],
},
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'List maker',
      template: './src/index.html',
      inject:'body',
    })
  ]
};
