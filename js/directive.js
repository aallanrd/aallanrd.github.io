var app = angular.module("App", []);

app.controller('Controller', ['$scope', function(scope) {
    scope.day = moment();
    scope.number = 150;
    scope.date = new Date();

    scope.getDayName = function(day){return ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][day];}
    scope.getMonthName = function(month){return ["January","February" ,"March","April","May","June","July","August","September","October","November","December"][month];}

  //  scope.getDayStartOff = fuction(day){return[0,1,2,3,4,5][day]}
  //  scope.getDayEndOff = fuction(day){return[0,1,2,3,4,5,6][7-day]}

  //
    scope.getDayColor = function(day){
     if( !day.visible)
      return 'info';
     if(day.day_name === 'Saturday' || day.day_name === 'Sunday')
        return 'warning';
     return 'success';
    }
  //
    scope.generate = function() {


      scope.month = [];
      //
  	  var nb= $('#date').val();
      //
      var date = new Date(nb);
      date.setDate(date.getDate() + 1);
      var dateOFF = new Date(nb);
      // Contadores
      var start = 0;
      var start_off = 0;
      // mes actual
      var actualM = date.getMonth() ;

      //
      var days = [];
      var weeks = [];

      var dateOff = new Date(nb);
      var off = date.getDay() + 1;

      dateOFF.setDate(dateOFF.getDate() - off);
      while(start_off != off){


        //Pushing Calendar to Array
          newDays = {
            "id": off,
            "date": new Date(dateOFF),
            "day": dateOFF.getDate(),
            "day_id": dateOFF.getDay(),
            "day_name": scope.getDayName(dateOFF.getDay()) ,
            "visible": false
          };
          days.push(newDays);
          start_off = start_off + 1;
          dateOFF.setDate(dateOFF.getDate() + 1);

      }
      //
      while(start < scope.number){
        var visible = true;


        //Pushing Calendar to Array
          newDays = {
            "id": start,
            "date": new Date(date),
            "day": date.getDate(),
            "day_id": date.getDay(),
            "day_name": scope.getDayName(date.getDay()),
            "visible": visible
          };

          days.push(newDays);

         //Add week days to count variable
          start = start + 1;
          date.setDate(date.getDate() + 1);

          if((actualM != date.getMonth()) || (start == scope.number) ){
            //Pushing Calendar to Array
              newMonth= {
                "id" :actualM,
                "name": scope.getMonthName(actualM),
                "month": days
              };
            actualM = date.getMonth();
          //  scope.month.push(scope.toWeeks(newMonth.month));
           scope.month.push(newMonth);
            days = [];
          }
  	}
      };

      scope.toWeeks = function(Month){
        let actual = Month[0].date;
        let dayOff = Month[0].day_id;
        let size = Month.length+dayOff;

        //Devolvernos dias de offset
        actual.setDate(actual.date-dayOff);
        var month = [];
        for(let i=0; i<size; i+=7){
          let week = [];
          for(let j=i; j%8<7; j++){
            let visible = j<dayOff?false:true;
            newDays = {
              "id": j,
              "date": new Date(actual),
              "day": actual.getDate(),
              "day_id": actual.getDay(),
              "visible": visible
            };
            week.push(newDays);
            if(j==size-1)
              break;
            actual.setDate(actual.getDate()+1);
          }
          month.push(week);
          return month;
        }


      }
}]);

app.directive("calendar", function() {
    return {
        restrict: "E",
        templateUrl: "templates/calendar.html",
        scope: {
            selected: "="
        },
        link: function(scope) {
            scope.selected = _removeTime(scope.selected || moment());
            scope.month = scope.selected.clone();

            var start = scope.selected.clone();
            start.date(1);
            _removeTime(start.day(0));

            _buildMonth(scope, start, scope.month);

            scope.select = function(day) {
                scope.selected = day.date;
            };

            scope.next = function() {
                var next = scope.month.clone();
                _removeTime(next.month(next.month()+1)).date(1));
                scope.month.month(scope.month.month()+1);
                _buildMonth(scope, next, scope.month);
            };

            scope.previous = function() {
                var previous = scope.month.clone();
                _removeTime(previous.month(previous.month()-1).date(1));
                scope.month.month(scope.month.month()-1);
                _buildMonth(scope, previous, scope.month);
            };
        }
    };

    function _removeTime(date) {
        return date.day(0).hour(0).minute(0).second(0).millisecond(0);
    }

    function _buildMonth(scope, start, month) {
        scope.weeks = [];
        var done = false, date = start.clone(), monthIndex = date.month(), count = 0;
        while (!done) {
            scope.weeks.push({ days: _buildWeek(date.clone(), month) });
            date.add(1, "w");
            done = count++ > 2 && monthIndex !== date.month();
            monthIndex = date.month();
        }
    }

    function _buildWeek(date, month) {
        var days = [];
        for (var i = 0; i < 7; i++) {
            days.push({
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            });
            date = date.clone();
            date.add(1, "d");
        }
        return days;
    }
});
