angular.module('toDoList', ['LocalStorageModule'])

.controller('ToDoListCtrl', function($scope, localStorageService) {
	// se comprueba que en local storage no exista nada guardado
	if (localStorageService.get('List')) {
		$scope.todo = localStorageService.get('List');
	} else {
		$scope.todo = [];
	}

	// se guarda el objeto

	$scope.addTask = function () {
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
		localStorageService.set('List', $scope.todo);
	}

	$scope.removefunc = function(task) {
		var index = $scope.todo.indexOf(task);
  	$scope.todo.splice(index, 1);
    $scope.persistKey();
  };

	$scope.persistKey = function() {
    localStorage.setItem('ls.List', JSON.stringify($scope.todo));
  };

});
