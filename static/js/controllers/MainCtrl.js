'use strict';

angular.module('app')
	.controller('MainCtrl', function ($scope, $state, ToDoFactory) {
		$scope.todos = ToDoFactory.read();
		$scope.newTodo = {};
		$scope.errorAdd = false;
		$scope.itemToDo = null;
		$scope.open = false;

		$scope.addToDo = function() {
			if (!$scope.newTodo.text) {
				$scope.errorAdd = true;
				return;
			}
			$scope.newTodo.id = new Date().getTime();
			$scope.newTodo.isDone = false;
			$scope.todos.push($scope.newTodo);
			ToDoFactory.save($scope.todos);
			$scope.newTodo = {};
			$scope.errorAdd = false;
		};

		$scope.done = function(item) {
			item.isDone = true;
			ToDoFactory.save($scope.todos);
			$scope.open = false;
		};

		$scope.showConfirm = function(todoItem) {
			$scope.itemToDo = todoItem;
			$scope.open = true;
		};

		$scope.cancel = function() {
			$scope.open = false;
		};
	});