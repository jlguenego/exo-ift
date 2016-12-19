var express = require('express');
var serveIndex = require('serve-index');

var app = express();


//webpack
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
webpackConfig.output.path = '/';
var compiler = webpack(webpackConfig);
var webpackDevMiddleware = require('webpack-dev-middleware');
app.use('/wpk/', webpackDevMiddleware(compiler, {
	// options
}));

app.use(express.static('.'));
app.use(serveIndex('.', {icons: true}));


app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, function() {
	console.log('server started on port ' + 8000);
});
