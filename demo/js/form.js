angular.module('myapp',[])
.controller('myCtrl',function($scope){
	$scope.hobby = [
		{
			id : 1,
			name : '打游戏'
		},
		{
			id : 2,
			name : '敲代码'
		},
		{
			id : 3,
			name : 'KTV'
		}
	];
	$scope.data = {
		hobbies : [1,2]
	}
	$scope.toggleSelect = function(id){
		var index = $scope.data.hobbies.indexOf(id);
		if(index === -1){
			$scope.data.hobbies.push(id);
		}else{
			$scope.data.hobbies.splice(index,1)
		}
		console.log($scope.data.hobbies)
	}
})