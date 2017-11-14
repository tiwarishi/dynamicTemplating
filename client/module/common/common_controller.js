var app = angular.module('common_module');
app.controller('MainController',['$http','$scope','MainService',function($http,$scope,MainService){
/*
	$scope.generateTemplate = function(){
		MainService.getData();				
	}*/
	$scope.data = "dummy";
	$scope.init = function () {

    	$scope.data = MainService.getData();
	}
	console.log("calling fromn the controllers");
	$scope.init();
}]);