'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'LoginCtrl'
  }); 
}])

.controller('LoginCtrl', [
  '$scope', 'UserFactory', 'UserService','$location',
  function($scope, UserFactory, UserService, $location) {
    $scope.title = "Login";
    $scope.newUser = false;
    $scope.user = {};
    $scope.$emit('UNLOAD');

    /**
       * initView - Method to initialise values.
       * @param {boolean} valid 
       */
    function initView() {
      
      if (document.getElementById('logForm')) {
        document.getElementById('logForm').reset();
      }
      if (document.getElementById('regForm')) {
        document.getElementById('regForm').reset();
      }
    }
    
    /**
       * regUser - Method to load registration view
       * @param {boolean} valid 
       */
    $scope.regUser = function(){
      initView();
      $scope.newUser = true;
    }

    /**
       * loginUser - Method to load login view.
       * @param {boolean} valid 
       */
    $scope.loginUser = function(){
      initView();
      $scope.newUser = false;
    }

    /**
       * createUser - Method to call api to create user
       * @param {boolean} valid 
       */
    $scope.createUser = function(valid) {
      if (valid) {
        $scope.$emit('LOAD');
          UserFactory.createUser($scope.user).then(
            function(d) {
                initView();
                $location.path('/login');
            },
            function(errResponse){
                console.error('Error while fetching Currencies');
                $scope.$emit('UNLOAD');
            }
          );
        }
    }

    /**
       * authUser - Method to call api to authenticate user
       * @param {boolean} valid 
       */
    $scope.authUser = function(valid) {
      if (valid) {
        $scope.$emit('LOAD');
        UserFactory.loginUser($scope.user).then(
          function(d) {
              console.log(d);
              UserService.saveUserDetails({email : $scope.user.email, password : $scope.user.password, token : d['token']});
              
              $location.path('/home');
          },
          function(errResponse){
              console.error('Error while fetching Currencies');
              $scope.$emit('UNLOAD');
          }
        );
      }
      
    }
  }
]);