'use strict';

angular.module('app')
	.controller('CompletedCtrl', function ($scope, ToDoFactory) {
		$scope.halfIsDone = false;
		$scope.todos = ToDoFactory.read();
		var doneCounter = 0;

		angular.forEach($scope.todos, function(toDo) {
			if (toDo.isDone == true) {
				doneCounter++;
			}
		});

		$scope.halfIsDone = doneCounter >= $scope.todos.length / 2;
	});