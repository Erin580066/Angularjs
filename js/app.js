//定义模板
angular.module('myapp',[])
.controller('cartController',function($scope){
	console.log($scope)
	$scope.cart = [
		{
			id : '1000',
			name : 'ihone5',
			num : 3,
			price : '3500'
		},
		{
			id : '44354',
			name : 'ihone6',
			num : 45,
			price : '4800'
		},
		{
			id : '6999',
			name : 'ihone6plus',
			num : 15,
			price : '5600'
		},
		{
			id : '3000',
			name : 'ihone7',
			num : 3,
			price : '7360'
		}
	];
	//商品总价
	$scope.totalPrice = function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			total += item.num * item.price;
		});
		return total;
	};
	//商品总数
	$scope.totalNum = function(){
		var total = 0;
		angular.forEach($scope.cart,function(item){
			total += item.num ;
		});
		return total;
	};
	$scope.remove = function(id){
//		alert(id)
		$scope.cart = {
			var index = -1;
			angular.f
		}
		
	}
})
	