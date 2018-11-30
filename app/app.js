'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.home',
  'myApp.UserFactory',
  'myApp.UserService',
  'myApp.capitalizeFirst',
  'myApp.customSort',
  'myApp.expand',
  'myApp.notfound',
  'myApp.compare'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  //$routeProvider.otherwise({redirectTo: '/login'});
}]).controller('appController',['$scope',function($scope){
  $scope.$on('LOAD',function(){
    console.log('LOAD LOADER');
    $scope.loading=true;
  });
  $scope.$on('UNLOAD',function(){
    console.log('UNLOAD LOADER');
    $scope.loading=false;
});
}]);
