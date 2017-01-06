const webpack = require('webpack')
const validate = require('webpack-validator')
const merge = require('webpack-merge')
const PATHS = require('../config/paths')
const webpack_parts = require('./parts')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const staticContent = require(PATHS.staticContent)

const common = {
  context: PATHS.app,
  entry: ['whatwg-fetch','./main.js'],
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: staticContent.appTitle,
      template: PATHS.indexTemplate,
      filename: 'index.html'
    })
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
  webpack_parts.loadJson(PATHS.app),
  webpack_parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT
  })
)

module.exports = validate(config, {
  quiet: true
})
