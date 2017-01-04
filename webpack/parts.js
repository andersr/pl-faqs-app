const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const PurifyCSSPlugin = require('purifycss-webpack-plugin')

exports.devServer = function(options) {
  return {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: options.host, // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        // Disabled as this won't work with html-webpack-template yet
        //multiStep: true
      })
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

// exports.loadCSS = function (paths) {
//   return {
//     module: {
//       loaders: [
//         {
//           test: /\.css$/,
//           loader: 'style!css',
//           include: paths
//         }
//       ]
//     }
//   }
// }

exports.loadSCSS = function (paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass'],
          include: paths
        }
      ]
    }
  }
}

// exports.extractSCSS = function (paths) {
//   return {
//     plugins: [
//       new ExtractTextPlugin('[name].css')
//     ],
//     module: {
//       loaders: [
//         {
//           test: /\.scss$/,
//           loader: ExtractTextPlugin.extract('style', 'css!sass'),
//           include: paths
//         }
//       ]
//     }
//   }
// }
