'use strict';

angular.module('app')
	.controller('MainCtrl', function ($scope, $state, ToDoFactory) {
		$scope.todos = ToDoFactory.read();
		$scope.newTodo = {};

		$scope.addToDo = function() {
			$scope.newTodo.id = new Date().getTime();
			$scope.newTodo.isDone = false;
			$scope.todos.push($scope.newTodo);
			ToDoFactory.save($scope.todos);
			$scope.newTodo = {};
		};

		$scope.done = function(item) {
			console.log(item);
		};
	});