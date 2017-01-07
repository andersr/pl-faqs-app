const webpack = require('webpack')
const validate = require('webpack-validator')
const merge = require('webpack-merge')
const PATHS = require('../config/paths')
const webpack_parts = require('./parts')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const staticContent = require(PATHS.staticContent)

const common = {
  context: PATHS.app,
  entry: [ 'webpack-hot-middleware/client',
           'whatwg-fetch',
           './main.js'
         ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: staticContent.appTitle,
      template: PATHS.indexTemplate,
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: PATHS.extensions
  }
}
const config = merge(
  common,
  {
    devtool: 'eval-source-map',
    performance: {
      hints: false
    }
  },
  webpack_parts.loadJSX(PATHS.app),
  webpack_parts.loadJson(PATHS.app)
)

module.exports = validate(config, {
  quiet: true
})


// ,
// webpack_parts.devServer({
//   host: process.env.HOST,
//   port: process.env.PORT
// })
