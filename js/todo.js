angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {


  $scope.getMonthName = function(month){

    var month_array = new Array();
    month_array[0] = "January";
    month_array[1] = "February";
    month_array[2] = "March";
    month_array[3] = "April";
    month_array[4] = "May";
    month_array[5] = "June";
    month_array[6] = "July";
    month_array[7] = "August";
    month_array[8] = "September";
    month_array[9] = "October";
    month_array[10] = "November";
    month_array[11] = "December";
    var n = month_array[month];

    return n;

  }


  $scope.generate = function() {

	  $scope.days = [];
    $scope.calendar = [];
    $scope.month = [];

	  var nb= $('#date').val();

    var date = new Date(nb);


    //locale = "utc-6",
    //month = date.toLocaleString(locale, { month: "long" });
  //  alert(month);

    var start = 0;

    // mes actual
    var actualM = date.getMonth() ;

    //Dia seleccionado
    var seleccionado = date.getDate() ;

    var final = $scope.number + seleccionado;
    //Inicio del mes = date -  seleccionado
    date.setDate(date.getDate() - seleccionado + 1);

  //
    while(start < final){

      var visible = start<seleccionado?false:true;

        //Pushing Calendar to Array
          newDays = {
            "id": start,
            "day": date.getDate(),
            "date": new Date(date),
            "visible": visible
          };

        $scope.days.push(newDays);

       //Add week days to count variable
        start = start + 1;
        date.setDate(date.getDate() + 1);

        if((actualM != date.getMonth()) || (start == final) ){
          //Pushing Calendar to Array
            newMonth= {
              "id" :actualM,
              "name": $scope.getMonthName(actualM),
              "month": $scope.days,

            };
          actualM = date.getMonth();

          $scope.month.push(newMonth);
          $scope.days = [];
        }
	}


	console.log("Ended..");

  };
}]);
