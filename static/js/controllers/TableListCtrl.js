'use strict';

angular.module('app')
	.controller('TableListCtrl', function ($scope, ToDoFactory) {
		$scope.todos = ToDoFactory.read();

	});