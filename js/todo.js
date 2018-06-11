angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {



  $scope.generate = function() {

	   $scope.calendars = [];

	  $scope.nb=$('#date').val();
    $scope.date = new Date(nb);

	  var start = 0;


    while(start < $scope.number){

		//Pushing Calendar to Array

  		newDays = {

  			"id": start,
  			"date": $scope.date
  		 };

		$scope.calendars.push(newDays);


		//Adding days to calendar
		$scope.date.setDate($scope.date.getDate() + 1);

		//Add week days to count variable
		start = start + 1;

	}


	console.log("Ended..");

  };
}]);
