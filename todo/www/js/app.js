angular.module('todo', ['ionic'])


.controller('MainCtrl', function($scope, $ionicModal){
  $scope.tasks = [
  {title: "Add some shit to do"}//default task
  ];

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('../views/new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });


  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    
    $scope.taskModal.hide();
    task.title = "";
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };

  $scope.eraseTasks = function() {
    $scope.tasks = [];
  }

})



// Without $scope, ControllerAs 
.controller('SidebarCtrl', function($ionicModal){
  var vm = {};

  vm.test = 'hi';
  console.log("hi from sidebar ctrl", vm);

  return vm;
});

// With $scope
// .controller('SidebarCtrl', function($scope, $ionicModal){
//   $scope.test = 'hi';
//   console.log("hi from sidebar ctrl", $scope);
// });


/* 

App.js 

  angular.module('App', ['ionic', 'sidebar', 'todo'])
  .controller('ApppCtrl, function($scope, $ionicModal);


SideBar
  - side-bar.js
  - side-bar.css/sass
  - side-bar.html

  angular.module('sidebar', ['ionic'])
  .controller('SidebarCtrl, function($scope, $ionicModal);

Todo
  -todo.js
  -todo.css/sass
  -todo.html

  angular.module('todo', ['ionic'])
  .controller('TodoCtrl', function($scope, $ionicModal);

*/



/*
todos.filter(function(todo, idx) {
 return idx !== ngRepatIndex
});
*/