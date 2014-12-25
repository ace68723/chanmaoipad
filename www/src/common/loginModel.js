'use strict';

var model = angular.module('LoginService', []);


 model.service('loginService', [ '$http', function( $http) {
	var model = this;
	
	model.post = function(user) {
			$http.post('http://chanmao.ca/?r=%20rrclient/login', user).success(function(response) {
		      model.result = response.result;
		    }).error(function() {
		      model.result = 'ERROR!';
		    });
		    return model.result;
	  };
}]);