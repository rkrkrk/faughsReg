'use strict';
console.log('bbb');
angular.module('faughsApp')

.controller('HomeCtrl',  function($scope, $http) {
	console.log('asd');
	$scope.message = 'hi dere'

	$scope.loadData = function() {
		$scope.data = "incoming"
		$http.get('data/dataIn.txt')
			.then( function (res){
				$scope.data = res.data;
			}), function (err){
				alert('error getting data', err);
			}
	}
});