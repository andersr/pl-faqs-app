const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

exports.devServer = function(options) {
  return {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: options.host, // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  };
}

exports.indexTemplate = function (options) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        title: options.title,
        template: options.template,
        inject: 'body',
        filename: 'index.html'
      })
    ]
  }
}

exports.loadJSX = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: paths
        }
      ]
    }
  }
}
