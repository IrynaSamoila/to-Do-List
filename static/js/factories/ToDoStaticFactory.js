'use strict';

angular.module('app')
	.factory('ToDoStaticFactory', function(){
		function getDefaultData() {
			return [{
				id: 1,
				text: "Zdobyc nagrode",
				isDone: false
			},{
				id: 2,
				text: "Zwiedzic Antarktyde",
				isDone: false
			},{
				id: 3,
				text: "Dostac ta prace",
				isDone: false
			},{
				id: 4,
				text: "Umyc naczynia",
				isDone: false
			},{
				id: 5,
				text: "Wyspac sie",
				isDone: false
			}]
		}

		return {
			getDefaultData: getDefaultData
		};
	});

