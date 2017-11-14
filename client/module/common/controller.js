 var module = angular.module('common_module');

 module.controller('MainController',['$http','$scope',function($http,$scope){

 	$scope.init = function(){
 		$http.get('/finance').then(function(response){
 			console.log(response.data);
 		});
 	}

 	$scope.init();
 }]);