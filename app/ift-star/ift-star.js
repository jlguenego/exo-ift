'use strict';

var app = angular.module('ift-star', []);

app.directive('iftStar', function() {
	return {
		link: function(scope, element, attrs) {
			console.log('iftStar link', arguments);
			var html = '';
			for (var i = 0; i < 5; i++) {
				html += '<img src="ift-star/img/yellow_star.png" />';
			}
			element.html(html);
		}
	};
});

