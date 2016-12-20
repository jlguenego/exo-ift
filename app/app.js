'use strict';

require('../bower_components/angular/angular.js');
require('../bower_components/angular-i18n/angular-locale_fr-fr.js');
require('./ift-star/ift-star.js');

var iftHeaderUrl = require('./tmpl/ift-header.html');
var iftFooterUrl = require('./tmpl/ift-footer.html');
console.log('iftFooterUrl', iftFooterUrl);

var app = angular.module('mainApp', ['ift-star']);

app.run(function($rootScope) {
	'ngInject';
	$rootScope.now = new Date();
});

app.directive('iftHeader', function() {
	return {
		templateUrl: iftHeaderUrl,
		link: function() {
			console.log('iftHeader link', arguments);
		}
	};
});

app.directive('iftFooter', function($templateCache) {
	return {
		templateUrl: iftFooterUrl
	};
});

