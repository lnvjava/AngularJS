var studentsApp= angular.module('studentsApp',['ngRoute']);

studentsApp.config(function($routeProvider){
     $routeProvider
	 .when('/main',{
	    templateUrl:'pages/main.html',
		controller: 'mainController',
		})
	 .when('/home',{
	    templateUrl:'pages/home.html',
		controller:'homeController',
		})
});

studentsApp.controller('mainController',['$scope','$http','$log',function($scope,$http,$log){
	//trying with json data
	
	$http.get('myJson.json')
    .success(function(data, status, headers, config) {
    $scope.sites = data;
  })
  .error(function(data, status, headers, config) {
    // alert('http error');
  });
  
   
  $scope.linkToSite = function (site) {
    $scope.selectedSite = site;
  };

	
	/*$scope.studentsdata=[
	   {
			name: 'Tom',
			Age: '22',
			Qualification: 'BTech',
			College: 'Gitam'
		},
		{
			name: 'Harry',
			Age: '21',
			Qualification: 'BTech',
			College: 'Gayatri'
		},
		{
			name: 'Sam',
			Age: '22',
			Qualification: 'BTech',
			College: 'AU'
		}
		
		];
		//$scope.studentsdata={};
		
		/*$scope.select=function(index){
			$scope.selectedStudent=$scope.studentsdata[index];
		}
	$scope.select=function(item){
		$scope.selected=$scope.studentsdata[item];
	};*/
	
	
	// trying with json data
	
	
}]);

studentsApp.controller('homeController',['$scope',function($scope){
	
	
}]);