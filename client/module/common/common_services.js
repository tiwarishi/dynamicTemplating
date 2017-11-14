
var common_module = angular.module('common_module');

	common_module.service('MainService',function($http){
	this.getData = function(){
		console.log("calling from the services");
		$http.get('http://localhost:2929/finance').then(function success(response){
			console.log(JSON.stringify(response));
			return response.data;
		});
	};
});