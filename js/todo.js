angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {
  
  $scope.date3;

  $scope.generate = function() {
    
	$scope.calendars = [];
	var date2 = new Date($scope.date);
	$scope.date3 = date2;
	
	var nb=$('#date').val();
	console.log(nb);
	
	var start = 0;
	
    while(start < $scope.number){
		
		//Pushing Calendar to Array
	
		newCalendar = {
			
			"id": start,
			"date": date3
		 };
			 
		$scope.calendars.push(newCalendar);
			
		
		//Adding days to calendar
		date3.setDate(date3.getDate() + 7);
		
		//Add week days to count variable
		start = start + 7;
		
	}	
	
	
	console.log("Ended..");
	
  };
}]);