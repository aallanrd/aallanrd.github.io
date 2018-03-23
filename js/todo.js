angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {
  
  

  $scope.generate = function() {
    
	$scope.calendars = [];
	
	
	var nb=$('#date').val();
	
	var date = new Date(nb);
	
	var start = 0;
	
    while(start < $scope.number){
		
		//Pushing Calendar to Array
	
		newCalendar = {
			
			"id": start,
			"date": date
		 };
			 
		$scope.calendars.push(newCalendar);
			
		
		//Adding days to calendar
		date.setDate(date.getDate() + 7);
		
		//Add week days to count variable
		start = start + 7;
		
	}	
	
	
	console.log("Ended..");
	
  };
}]);