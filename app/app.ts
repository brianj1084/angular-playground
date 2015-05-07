/// <reference path="./_app.ts" />

module app {
	'use strict';
	
	angular.module('app', ['ui.router', 'ui.bootstrap']).
		config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
			$stateProvider.
				state('app', {
					url: '',
					abstract: true,
					templateUrl: 'app/app.html',
					controller: 'AppController',
					controllerAs: 'ctrl'
				}).
				state('app.home', {
					url: '/home',
					views: {
						'content': {
							templateUrl: 'app/home/home.html',
							controller: 'HomeController',
							controllerAs: 'ctrl'
						}
					}
				});
				
			$urlRouterProvider.otherwise('/home');
		})
		.controller('AppController', controllers.AppController)
		.controller('HomeController', controllers.HomeController);
}