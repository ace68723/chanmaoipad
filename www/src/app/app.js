angular.module('example-app',[
	'ionic', 
	'ngCordova',
	'templates-app',
	'example-app.modules',
	'LoginCtrl',
	'LoginService'

	])

	.config(function($stateProvider, $urlRouterProvider) {

	  $stateProvider

	  // setup an abstract state for the tabs directive
	    .state('tab', {
	    url: "/tab",
	    abstract: true,
	    templateUrl: "tabs/tabs.tpl.html"
	  })
	    .state('tab.dash', {
	    url: '/dash',
	    views: {
	      'tab-dash': {
	        templateUrl: 'login/login.tpl.html',
	        controller: 'loginCtrl'
	      }
	    }
	  })

	;

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/tab/dash');

	});