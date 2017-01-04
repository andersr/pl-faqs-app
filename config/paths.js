const path = require('path')

module.exports = {
  app: path.join(__dirname, '../app'),
  build: path.join(__dirname, '../build'),
  extensions: ['', '.js', '.jsx'],
  indexTemplate: path.join(__dirname, '../app/templates/index.tpl.ejs'),
  staticContent: path.join(__dirname, '../app/lib/staticContent')
}
