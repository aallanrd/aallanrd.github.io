angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {
  

  $scope.generate = function() {
    
	$scope.calendars = [];
	$scope.date = new Date($scope.date);
	
	$scope.start = 0;
	
    while($scope.start < $scope.number){
		console.log("Pushing..");
		$scope.calendars.push("Calendar" + $scope.start );
		$scope.start = $scope.start + 7;
	}		
	console.log("ENded..");
	
  };
}]);