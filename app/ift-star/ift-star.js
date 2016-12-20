'use strict';
require('./ift-star.css');

var app = angular.module('ift-star', []);

app.directive('iftStar', function() {
	return {
		link: function(scope, element, attrs) {
			console.log('iftStar link', arguments);
			var disabled = false;
			var html = '';
			var note = attrs.note;
			if (note === undefined || note === '') {
				disabled = true;
			} else {
				note = Number(note);
				disabled = isNaN(note);
			}
			
			
			
			if (disabled) {
				for (var i = 0; i < 5; i++) {
					html += '<img src="ift-star/img/gray_star.png" />';
				}
			} else {
				note = (note > 5) ? 5 : note;
				note = (note < 0) ? 0 : note;
				for (var i = 0; i < note; i++) {
					html += '<img src="ift-star/img/yellow_star.png" />';
				}
				for (var i = note; i < 5; i++) {
					html += '<img src="ift-star/img/white_star.png" />';
				}
			}
				
			element.html(html);
		}
	};
});

