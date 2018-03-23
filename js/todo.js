angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {
  

  $scope.generate = function() {
    
	$scope.calendars = [];
	$scope.date = new Date($scope.date);
	
	$scope.start = 0;
	
    while($scope.start < $scope.number){
		
		//Pushing Calendar to Array
	
		$scope.newCalendar = {
			
			"id":$scope.start,
			"date":$scope.date
		 };
			 
	$scope.calendars.push($scope.newCalendar);
			
			
			
		console.log("Push..");
		//Adding days to calendar
		$scope.date.setDate($scope.date.getDate() + 7);
		
		//Add week days to count variable
		$scope.start = $scope.start + 7;
		
	}	
	
	
	console.log("Ended..");
	
  };
}]);