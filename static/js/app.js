'use strict';

angular.module('app', [
	'ui.router',
	'ngRoute'
]).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('main', {
		url: '/',
		templateUrl: 'templates/pages/main.html',
		controller: 'MainCtrl'
	}).state('completed', {
		url: '/completed',
		templateUrl: 'templates/pages/completed.html',
		controller: 'CompletedCtrl'
	}).state('table_list', {
		url: '/table-list',
		templateUrl: 'templates/pages/tableList.html',
		controller: 'TableListCtrl'
	})
});
