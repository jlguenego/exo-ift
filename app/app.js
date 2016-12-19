(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.directive('iftHeader', function() {
		return {
			templateUrl: './tmpl/ift-header.html'
		};
	});

})();
