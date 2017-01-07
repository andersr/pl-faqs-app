var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack/devConfig');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
  noInfo:true
}));

app.use(require('webpack-hot-middleware')(compiler, {
  noInfo: true,
  publicPath: '/'
}));

app.use('*', function(req, res, next) {
  var filename = path.join(compiler.outputPath,'index.html');
  compiler.outputFileSystem.readFile(filename, function(err, result){
    if (err) {
      return next(err);
    }
    res.set('content-type','text/html');
    res.send(result);
    res.end();
  });
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
})
