angular.module('todoApp', ['$scope'])
  .controller('TodoListController', $scope,  function() {

    var todoList = this;


    todoList.addTodo = function() {
      alert("Generating"  + $scope.number);
    };




  });
