const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// exports.devServer = function(options) {
//   return {
//     devServer: {
//       publicPath: options.publicPath,
//       historyApiFallback: true,
//       hot: true,
//       inline: true,
//       stats: 'errors-only',
//       host: options.host, // Defaults to `localhost`
//       port: options.port // Defaults to 8080
//     },
//     plugins: [
//       new webpack.HotModuleReplacementPlugin()
//     ]
//   };
// }

exports.loadJSX = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader:'babel',
          include: paths
        }
      ]
    }
  }
}

exports.loadJson = function (paths) {
  return {
    module: {
      loaders: [{
        test: /\.json$/,
        loader: 'json'
      }]
    }
  }
}
