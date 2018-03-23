angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {
  

  $scope.generate = function() {
    
	$scope.calendars = [];
	var date2 = new Date($scope.date);
	
	var start = 0;
	
    while(start < $scope.number){
		
		//Pushing Calendar to Array
	
		newCalendar = {
			
			"id": start,
			"date": date2
		 };
			 
		$scope.calendars.push(newCalendar);
			
		
		//Adding days to calendar
		date2.setDate(date2.getDate() + 7);
		
		//Add week days to count variable
		start = start + 7;
		
	}	
	
	
	console.log("Ended..");
	
  };
}]);