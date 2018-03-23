angular.module('scopeExample', [])
.controller('MyController', ['$scope', function($scope) {
  $scope.start = 'World';

  $scope.sayHello = function() {
    $scope.greeting = 'Hello ' + $scope.start + '!';
  };
}]);