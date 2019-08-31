var app = angular.module('calc', []);

app.controller('MainCtrl', function($scope) {
$scope.add=function(num1,num2)
{
  $scope.result=parseInt(num1)+parseInt(num2);
}

$scope.subtract=function(num1,num2)
{
  $scope.result=parseInt(num1)-parseInt(num2);
}

$scope.multiply=function(num1,num2)
{
  $scope.result=parseInt(num1)*parseInt(num2);
}

$scope.div=function(num1,num2)
{
  $scope.result=parseInt(num1)/parseInt(num2);
}


});