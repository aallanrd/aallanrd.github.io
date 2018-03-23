angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {
  

  $scope.generate = function() {
    
	$scope.calendars = [];
	var date = new Date($scope.date);
	
	var start = 0;
	
    while(start < $scope.number){
		
		//Pushing Calendar to Array
	
		$scope.newCalendar = {
			
			"id": start,
			"date": date
		 };
			 
		$scope.calendars.push($scope.newCalendar);
			
		
		//Adding days to calendar
		date.setDate(date.getDate() + 7);
		
		//Add week days to count variable
		start = start + 7;
		
	}	
	
	
	console.log("Ended..");
	
  };
}]);