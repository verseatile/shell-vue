// webpack config

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

const config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'index_bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('./app')
    }
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        include: [
          path.resolve(__dirname + '/app')
        ]
      },
      {
        use: 'vue-loader',
        test: /\.vue$/,
        include: [
          path.resolve(__dirname + '/app')
        ]
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
        include: [
          path.resolve(__dirname + '/app')
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    contentBase: path.join(__dirname, "app"),
    compress: true,
    port: 9000
  }
};

module.exports = config
