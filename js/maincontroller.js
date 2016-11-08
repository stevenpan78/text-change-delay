var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $timeout) {
  $scope.myText = "Hello world from the Internet!";
  $timeout(function () {
      $scope.myText = "How are you today?";
      $timeout(function(){
      	$scope.myText = "New world";
      	$timeout(function(){
      	$scope.myText = "It is a sunny day";
      	$timeout(function(){
      		$scope.myText = "This is the last line";
 		 }, 2000);
 	 	}, 3000);
 	 }, 2000);
  }, 4000);
  
});