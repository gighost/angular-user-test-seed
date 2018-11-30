'use strict';

angular.module('myApp.home', ['ngRoute'])

  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', [
    '$scope', 'UserFactory', 'UserService', '$location','$filter',
    function ($scope, UserFactory, UserService, $location, $filter) {
      

      // init
      $scope.sort = {
        sortingOrder: 'id',
        reverse: false
      };
      $scope.gap = 5;
      $scope.filteredItems = [];
      $scope.groupedItems = [];
      $scope.itemsPerPage = 5;
      $scope.totalCount = 0;
      $scope.pagedItems = [];
      $scope.currentPage = 0;
      $scope.items = [];
      $scope.selectedItem = {first_name : '', last_name : ''};


      if (!UserService.getUserDetails() || (UserService.getUserDetails() && !UserService.getUserDetails().token)) {
        $scope.$emit('LOAD');
        $location.path('/login');
      }

      /**
       * loadTable - Method to load table with current page index
       * @param {number} value 
       */
     var loadTable = function(value) {
      $scope.$emit('LOAD');
      UserFactory.fetchAllUsers(value+1).then(
        function(d) {
            $scope.items = d['data'];
            $scope.totalCount = d['total_pages'];
            $scope.search();
            $scope.$emit('UNLOAD');
        },
         function(errResponse){
             console.error('Error while getting user list');
             $scope.$emit('UNLOAD');
         }
      );
     }

      /**
       * searchMatch - Method to search for match to sort.
       * @param {*} haystack 
       * @param {*} needle 
       */
      var searchMatch = function (haystack, needle) {
        if (!needle) {
          return true;
        }
        return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
      };

      /**
       * search - Method to init the filtered items
       */
      $scope.search = function () {
        $scope.filteredItems = $filter('filter')($scope.items, function (item) {
          for (var attr in item) {
            if (searchMatch(item[attr], $scope.query))
              return true;
          }
          return false;
        });
        // take care of the sorting order
        if ($scope.sort.sortingOrder !== '') {
          $scope.filteredItems = $filter('orderBy')($scope.filteredItems, $scope.sort.sortingOrder, $scope.sort.reverse);
        }
        
        // now group by pages
        $scope.groupToPages();
      };


      /**
       * groupToPages - calculate page in place.
       */
      $scope.groupToPages = function () {
        $scope.pagedItems = [];

        for (var i = 0; i < $scope.filteredItems.length; i++) {
          if (i % $scope.itemsPerPage === 0) {
            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)] = [$scope.filteredItems[i]];
          } else {
            $scope.pagedItems[Math.floor(i / $scope.itemsPerPage)].push($scope.filteredItems[i]);
          }
        }
      };

      /**
       * range - Method to get range
       */
      $scope.range = function (size, start, end) {
        var ret = [];
        console.log(size, start, end);

        if (size < end) {
          end = size;
          start = size - $scope.gap;
        }
        for (var i = start; i < end; i++) {
          if (i >= 0) {
            ret.push(i);
          }
          
        }
        console.log('RAGNGE '+ret);
        return ret;
      };

      /**
       * prevPage - Method to call previous page and call api with corresponding page.
       */
      $scope.prevPage = function () {
        if ($scope.currentPage > 0) {
          $scope.currentPage--;
        }
        loadTable($scope.currentPage);
      };

      /**
       * nextPage - Method to call next page and call api with corresponding page.
       */
      $scope.nextPage = function () {
        if ($scope.currentPage < $scope.pagedItems.length - 1) {
          $scope.currentPage++;
        }
        loadTable($scope.currentPage);
      };

      /**
       * setPage - Method to set page and call api with corresponding page.
       */
      $scope.setPage = function () {
        $scope.currentPage = this.n;
        loadTable($scope.currentPage);
      };

      /**
       * expandRow - Method to expand row for updating user.
       */
      $scope.expandRow = function(item) {
          $scope.selectedItem = item;
          $scope.$broadcast('onExpandAll', {
            expanded: false
          });        
      }

      /**
       * updateUser - Method to update user.
       */
      $scope.updateUser = function(){
        $scope.$emit('LOAD');
        UserFactory.updateUser({first_name : $scope.selectedItem.first_name, last_name : $scope.selectedItem.last_name}, $scope.selectedItem.id).then(
          function(d) {
            loadTable($scope.currentPage);
          },
           function(errResponse){
               console.error('Error while updating user');
               $scope.$emit('UNLOAD');
           }
        );
      }

      /**
       * deleteUser - Method to delete user.
       */
      $scope.deleteUser = function(id){
        $scope.$emit('LOAD');
        UserFactory.deleteUser(id).then(
          function(d) {
            loadTable($scope.currentPage);
          },
           function(errResponse){
               console.error('Error while deleting user');
               $scope.$emit('UNLOAD');
           }
        );
      }

      /**
       * logout - Method to initiate logout
       */
      $scope.logout = function(){
        UserService.saveUserDetails({});
        $scope.$emit('LOAD');
        $location.path('/login');
      }

      /**
       * Initial loading of table with current page as 1
       */
      loadTable($scope.currentPage);
    }]);