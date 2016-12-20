'use strict';
require('./ift-star.css');

var app = angular.module('ift-star', []);

app.directive('iftStar', function($compile) {
	return {
		scope: {
			n: '=note'
		},
		link: function(scope, element, attrs) {
			console.log('iftStar link', arguments);
			
			scope.update = function(note) {
				console.log('update', arguments);
				scope.n = note;
			};
			
			scope.$watch('n', function() {
				var disabled = false;
				var html = '';
				var note = scope.n;
				if (note === undefined || note === '') {
					disabled = true;
				} else {
					note = Number(note);
					disabled = isNaN(note);
				}
				
				
				
				if (disabled) {
					for (var i = 0; i < 5; i++) {
						html += '<img ng-click="update(' + (i+1) + ')" src="ift-star/img/gray_star.png" />';
					}
				} else {
					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;
					for (var i = 0; i < note; i++) {
						html += '<img ng-click="update(' + (i+1) + ')" src="ift-star/img/yellow_star.png" />';
					}
					for (var i = note; i < 5; i++) {
						html += '<img ng-click="update(' + (i+1) + ')" src="ift-star/img/white_star.png" />';
					}
				}
					
				element.html(html);
				var fn = $compile(element.contents());
				//console.log('fn', fn.toString());
				fn(scope);
				
			});
			
			
		}
	};
});

