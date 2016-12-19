angular.module('myApp',[])
//数据
.factory('Data',function(){
	return [
		{
			title : '标题一',
			content : 'no1-content'
		},
		{
			title : '标题二',
			content : 'no2-content'
		},
		{
			title : '标题三',
			content : 'no3-content'
		}
	];
})
//控制器
.controller('firstCtrl',['$scope','Data',function($scope,Data){
	$scope.data = Data;
}])
//kittencupGroup自定义指令
.directive('kittencupGroup',function(){
	return {
		restrict : 'E',
		replace : 'true',
		template : '<div class="panel-group" ng-transclude></div>',
		transclude : true,
		controllerAs : 'kittencupGroupCtrl',
		controller: function(){
			this.groups = [];
			this.closeOtherCollapse = function(nowScope){
				angular.forEach(this.groups,function(scope){
					if(scope !== nowScope){
						scope.isOpen = false;
					}
				})
			}
		}
	}
})
//kittencupCollapse自定义指令
.directive('kittencupCollapse',function(){
	return {
		restrict : 'E',
		replace : 'true',
		require : '^kittencupGroup',
		templateUrl : 'template/kittencupCollapse.html',
		scope : {
			heading : '@heading'
		},
		link : function(scope,element,attr,kittencupGroupCtrl){
			scope.isOpen = false;
			scope.changeOpen = function(){
				scope.isOpen = !scope.isOpen;
				kittencupGroupCtrl.closeOtherCollapse(scope);
			}
			kittencupGroupCtrl.groups.push(scope)
		},
		transclude : true
	}
})