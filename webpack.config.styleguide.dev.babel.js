import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'src/styleguide/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src/styleguide'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src/styleguide'),
  },
  plugins: [
    // Create HTML file that includes references to bundled JS
    new HtmlWebpackPlugin({
      template: 'src/styleguide/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['style','css']
      },
      {
        test: /\.md$/,
        loaders: ['catalog/lib/loader', 'raw']
      }
    ]
  }
};
