angular.module('example-app',[
	'ionic', 
	'ngCordova',
	'example-app.login',
	'ui.router',
	'templates-app',
	'example-app.modules',
	'LoginService'

	])

	.config(function($stateProvider, $urlRouterProvider) {

	  $stateProvider

	  // setup an abstract state for the tabs directive
	    .state('tab', {
	    url: "/tab",
	    abstract: true,
	    templateUrl: "tabs.tpl.html"
	  })
	    .state('tab.dash', {
	    url: '/dash',
	    views: {
	      'tab-dash': {
	        templateUrl: 'login/login.tpl.html',
	        //controller: 'NetworkCtrl'
	      }
	    }
	  })

	;

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/tab/dash');

	});