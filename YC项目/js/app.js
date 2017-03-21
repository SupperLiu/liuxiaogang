var app = angular.module('myapp', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
   		$urlRouterProvider.otherwise('login');
    	$stateProvider.state('zhuce',{
			url:'zhuce',
			templateUrl:'zhuce.html'
		})
    	$stateProvider.state('pwdreset',{
			url:'pwdreset',
			templateUrl:'pwdreset.html'
		})
    	$stateProvider.state('login2',{
			url:'login2',
			templateUrl:'login2.html'
		})
    	$stateProvider.state('login',{
			url:'login',
			templateUrl:'login.html'
		})
	});
