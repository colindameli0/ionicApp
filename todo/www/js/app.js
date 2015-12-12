angular.module('todo', ['ionic'])
.controller('MainCtrl', function($scope, $ionicModal){


  $scope.tasks = JSON.parse(localStorage.getItem('myData'))
  function updateStorage() {

    localStorage.setItem('myData', JSON.stringify($scope.tasks));
  }


  $scope.date = new Date();

  //CREATE AND LOAD THE MODAL FOR CREATING TASKS
  $ionicModal.fromTemplateUrl('./views/new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  //CREATE AND LOAD THE MODAL FOR EDITING TASKS
  $ionicModal.fromTemplateUrl('./views/edit-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  //OPEN THE NEW TASK MODAL
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  //EDIT THE TASK
  $scope.editTask = function($index) {
    $scope.taskModal.show();
    $scope.selected = $scope.tasks[$index];
    console.log($scope.tasks[$index]);

  };

  //FORM SUBMISSION
  $scope.createTask = function(task) {
      $scope.tasks.push({title: task.title});
      updateStorage();
      task.title = "";
      $scope.taskModal.hide();
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
