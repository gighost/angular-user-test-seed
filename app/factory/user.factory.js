'use strict';

angular.module('myApp.UserFactory', ['ngRoute']).factory('UserFactory', ['$http', '$q', function($http, $q){
 
    return {
         
    fetchAllUsers: function(currentpage) {
            return $http.get('https://reqres.in/api/users?page='+currentpage+'&&per_page=4&&delay=1&&first_name=ar')
            .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while fetching users');
                        return $q.reject(errResponse);
                    }
            );
        },
     
    createUser: function(user){
            return $http.post('https://reqres.in/api/register?delay=3', user)
            .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while creating user');
                        return $q.reject(errResponse);
                    }
            );
        },
    loginUser: function(user){
        return $http.post('https://reqres.in/api/login?delay=3', user)
        .then(
                function(response){
                    return response.data;
                }, 
                function(errResponse){
                    console.error('Error while creating user');
                    return $q.reject(errResponse);
                }
        );
    },
    updateUser: function(user, id){
        console.log(JSON.stringify(user));
            return $http(
                { method: 'PATCH', 
                url: 'https://reqres.in/api/users/'+id+'?first_name='+user.first_name+'&last_name='+user.last_name, 
                headers: { 'Content-Type': 'application/json; charset=utf-8' }
            },user)
            .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while updating user');
                        return $q.reject(errResponse);
                    }
            );
        },
     
   deleteUser: function(id){
            return $http.delete('https://reqres.in/api/users/'+id)
            .then(
                    function(response){
                        return response.data;
                    }, 
                    function(errResponse){
                        console.error('Error while deleting user');
                        return $q.reject(errResponse);
                    }
            );
        }
         
    };
 
}]);