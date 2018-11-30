'use strict';

angular.module('myApp.UserService', ['ngRoute']).service('UserService',function(){
    this._userDetails;
    this.saveUserDetails = function(user){ // define an instance method
        this._userDetails = user;
    }
    this.getUserDetails = function() {
        return this._userDetails;
    }
  });