angular.module('todo', ['ionic'])
.controller('MainCtrl', function($scope, $ionicModal){

  //Find a value in the 'myData' key in localStorage, then load that
  //Since its now a string and $scope.tasks is a array, we need to convert it back with the function JSON.parse() and pass in the task list as an string
  $scope.tasks = JSON.parse(localStorage.getItem('myData'))
  function updateStorage() {
    //call the JSON.stringify() function and pass in the $scope.tasks , this will convert the array into just a string
    localStorage.setItem('myData', JSON.stringify($scope.tasks));
  }

  //INITIALIZE THE DATE
  $scope.date = new Date();

  //CREATE AND LOAD THE MODAL
  $ionicModal.fromTemplateUrl('./views/new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  //OPEN THE NEW TASK MODAL
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  //FORM SUBMISSION
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    updateStorage();
    $scope.taskModal.hide();
    task.title = "";
  };

  //CLOSE THE NEW TASK MODAL
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };

  //INITIATE ABILITY TO ERASE TASKS
  $scope.eraseTasks = function() {
    $scope.isActive = !$scope.isActive;
  };

  //ERASE INDIVIDUAL TASK
  $scope.eraseThisTask = function( idx ) {
    $scope.tasks.splice(idx, 1);
    updateStorage();
  }

})

//SECONDARY 'SETTINGS' CONTROLLER
.controller('SidebarCtrl', function($ionicModal){
  var vm = {};
  vm.set = 'SETTINGS';
  return vm;
});
