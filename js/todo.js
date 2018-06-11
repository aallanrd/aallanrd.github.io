angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {



  $scope.generate = function() {

	  $scope.calendars = [];

	  var nb= $('#date').val();

    var date = new Date(nb);

	  var start = 0;


    while(start < $scope.number){

		//Pushing Calendar to Array

  		newDays = {

  			"id": start,
  			"date": new Date(date)
  		 };


		$scope.calendars.push(newDays);
		//Adding days to calendar
		date.setDate(date.getDate() + 1);

		//Add week days to count variable
		start = start + 1;

	}


	console.log("Ended..");

  };
}]);
