angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {
  

  $scope.generate = function() {
    
	$scope.calendars = [];
	$scope.date = new Date($scope.date);
	
	$scope.start = 0;
	
    while($scope.start < $scope.number){
		
		//Pushing Calendar to Array
		$scope.calendars.push("Calendar" + $scope.start + "--> Date: " + $scope.date );
		
		//Adding days to calendar
		$scope.calendar = $scope.date.setDate($scope.date.getDate() + 7);
		
		//Add week days to count variable
		$scope.start = $scope.start + 7;
		
	}	
	$scope.calendars.push("{'calendar':" + $scope.start + "'date':'" + $scope.date + "'}" );
	
	;
	
	console.log("ENded..");
	
  };
}]);