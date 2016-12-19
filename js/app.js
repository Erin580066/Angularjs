//定义模板
angular.module('myapp',[])
//.config(function($interpolateProvider){
//	$interpolateProvider.startSymbol('!!');
//	$interpolateProvider.endSymbol('!!')
//})
.service('cartData',function(){
	return [
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
})
//自定义过滤器
.filter('name',function(){
	return function(obj){
		var newObj = [];
		angular.forEach(obj,function(res){
			if(res.num === 15){
				newObj.push(res)
			}
		})
		return newObj
	}
})
.controller('cartController',function($scope,cartData){
	$scope.cart = cartData;
	$scope.orderType = 'id';
	$scope.order = '-';
	$scope.changeOrder = function(type){
		$scope.orderType = type;
		if($scope.order === ''){
			$scope.order = '-';
		}else{
			$scope.order = '';
		}
	};
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
			total += parseInt(item.num);
		});
		return total;
	};
	//产品某一项添加数量
	$scope.addNum = function(id){
		var index = findIndex(id);
		if(index !==-1){
			$scope.cart[index].num++;
		}
	}
	//产品某一项减少数量
	$scope.reduce = function(id){
		var index = findIndex(id);
		if(index!==-1){
			var reduceNum = $scope.cart[index];
			if(reduceNum.num>1){
				reduceNum.num--;
			}else{
				var returnKey = confirm('是否从购物车删除该商品');
				if(returnKey){
					$scope.remove(id);
				}
			}
		}
	}
	//找到一个元素的索引值
	var findIndex = function(id){
		var index = -1;
		angular.forEach($scope.cart,function(item,key){
			if(item.id === id){
				index = key;
				return; //后面的不需要执行了
			}
		})
		return index;
	}
	//删除一项列表
	$scope.remove = function(id){
		var index = findIndex(id);
//		var index = -1;
//		angular.forEach($scope.cart,function(item,key){
//			if(item.id === id){
//				index = key;
//			}
//		})
		if(index !== -1){
			$scope.cart.splice(index,1)
		}
	};
	$scope.$watch('cart',function(newValue,oldValue){
		angular.forEach(newValue,function(item,key){
			if(item.num<1){
				var returnKey = confirm('是否从购物车删除该商品');
				if(returnKey){
					$scope.remove(item.id);
				}else{
					item.num = oldValue[key].num;
				}
			}
		})
	},true)
})
	