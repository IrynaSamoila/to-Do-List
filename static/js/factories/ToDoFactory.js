'use strict';

angular.module('app')
	.factory('ToDoFactory', function(ToDoStaticFactory){

		function save(json) {
			localStorage.setItem('todos', JSON.stringify(json));
		}

		function read() {
			if (localStorage.getItem('todos') == null) {
				localStorage.setItem('todos', JSON.stringify(ToDoStaticFactory.getDefaultData()));
			}
			return JSON.parse(localStorage.getItem('todos'));
		}

		return {
			save: save,
			read: read
		};
	});

