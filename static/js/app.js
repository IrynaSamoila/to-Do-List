'use strict';

angular.module('app', [
	'ui.router',
	'ngRoute'
]).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('main', {
		url: '/',
		templateUrl: 'templates/pages/main.html',
		controller: 'MainCtrl',
		data: {
			'title': 'Lista zadan'
		}
	})/*.state('git_hub', {
		url: '/git-hub',
		templateUrl: 'templates/pages/gitHub.html',
		controller: 'MainController',
		data: {
			'title': 'X-Formation public repositories'
		}
	}).state('top_contributors', {
		url: '/top-contributors',
		templateUrl: 'templates/pages/topContributors.html',
		controller: 'MainController',
		data: {
			'title': 'Top contributors'
		}
	})*/
});

