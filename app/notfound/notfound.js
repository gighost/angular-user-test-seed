'use strict';

angular.module('myApp.notfound', ['ngRoute'])

  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
        controller: 'notfoundController',
        templateUrl: 'notfound/notfound.html'
    });
  }]).controller('notfoundController', function($scope, $location) {
    $scope.path = $location.path();
    $scope.back = function() {
        history.back();
    };
    $scope.tologin = function() {
        $scope.$emit('LOAD');
        $location.path('/login');
    };
});