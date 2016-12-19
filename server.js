var express = require('express');
var serveIndex = require('serve-index');

var app = express();

// run with --prod if you want to test the prod stuff (you don't have the short dev loop)
var prod = (process.argv[2] === '--prod');
var htdocs = './app';
var port = 8000;
if (prod) {
	htdocs = './dist';
	port = 9000;
}

// for the short loop dev paradigm: express watches the files and build the bundles when needed.
if (!prod) {
	//webpack
	var webpack = require('webpack');
	var webpackConfig = require('./webpack.config.js');
	webpackConfig.output.path = '/';
	var compiler = webpack(webpackConfig);
	var webpackDevMiddleware = require('webpack-dev-middleware');
	app.use('/wpk/', webpackDevMiddleware(compiler, {
		// options
	}));
}

app.use(express.static('.'));
app.use(serveIndex('.', {icons: true}));


app.use(function(req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(port, function() {
	console.log('server started on port ' + port);
});
