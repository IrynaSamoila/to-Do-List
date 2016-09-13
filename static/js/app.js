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
	}).state('completed', {
		url: '/completed',
		templateUrl: 'templates/pages/completed.html',
		controller: 'CompletedCtrl',
		data: {
			'title': 'Zadan wypelniono'
		}
	}).state('table_list', {
		url: '/table-list',
		templateUrl: 'templates/pages/tableList.html',
		controller: 'TableListCtrl',
		data: {
			'title': 'Tablica zadan'
		}
	})
});

