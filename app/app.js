(function() {
	'use strict';

	var app = angular.module('mainApp', []);

	app.directive('iftHeader', function() {
		return {
			templateUrl: './tmpl/ift-header.html'
		};
	});
	
	app.directive('iftFooter', function($http) {
		return {
			link: function(scope, element, attrs) {
				console.log('link', arguments);
				$http.get('./tmpl/ift-footer.html')
					.then(function(response) {
						var html = response.data;
						element.html(html);
					}).catch(function(error) {
						console.error('error', error);
					});
				
			}
		};
	});

})();
