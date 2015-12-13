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
    $scope.editModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  /*---------------------------
  CREATING A NEW TODO TASK
  ---------------------------*/

  //OPEN BRAND NEW TASK MODAL
  $scope.openNewTask = function() {
    $scope.taskModal.show();
  };

  //CREATE NEW TASK AND ADD TO THE TODO LIST
  $scope.createTask = function(task) {
    $scope.tasks.push({title: task.title});
    updateStorage();
    task.title = "";
    $scope.taskModal.hide();
  };

  //CLOSE THE NEW TASK MODAL ON 'CANCEL'
  $scope.closeNewTask = function() {
    $scope.editModal.hide();
    $scope.taskModal.hide();
  };

  /*---------------------------
  EDITING A OLD TODO TASK
  ---------------------------*/

  //EDIT THE SPECIFIC TASK
  $scope.editTaskNew = function($index) {
    $scope.editModal.show();
    $scope.selected = $scope.tasks[$index];
    updateStorage();
    selected.title = "";
  };

  //HIDE THE EDIT TASK MODAL UPON SUBMIT
  $scope.editTask = function($index) {
    $scope.editModal.hide();
  };

  /*---------------------------
  DELETING A TODO TASK
  ---------------------------*/

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
