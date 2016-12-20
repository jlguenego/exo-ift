'use strict';

var app = angular.module('ift-star', []);

app.directive('iftStar', function() {
	return {
		link: function() {
			console.log('iftStar link', arguments);
		}
	};
});

