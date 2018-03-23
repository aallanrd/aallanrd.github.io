angular.module('App', [])
.controller('Controller', ['$scope', function($scope) {
  $scope.start = 'World';

  $scope.sayHello = function() {
    $scope.greeting = 'Hello ' + $scope.start + '!';
  };
}]);