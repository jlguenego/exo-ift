'use strict';

require('../bower_components/angular/angular.js');

var iftHeaderUrl = require('./tmpl/ift-header.html');
var iftFooterUrl = require('./tmpl/ift-footer.html');
console.log('iftFooterUrl', iftFooterUrl);

var app = angular.module('mainApp', []);

app.directive('iftHeader', function() {
	return {
		templateUrl: iftHeaderUrl,
		link: function() {
			console.log('xxx iftHeader link', arguments);
		}
	};
});

app.directive('iftFooter', function($templateCache) {
	return {
		templateUrl: iftFooterUrl
	};
});

