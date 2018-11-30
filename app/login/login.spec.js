'use strict';

describe('myApp.login module', function() {
  var scope, $location, createController;

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
      $location = _$location_;
      var UserFactory, UserService
      scope = $rootScope.$new();

      createController = function() {
          return $controller('LoginCtrl', {
              '$scope': scope, 'UserService' : UserService, 'UserFactory' : UserFactory
          });
      };
  }));

  describe('login controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var LoginCtrl = $controller('LoginCtrl');
      expect(LoginCtrl).toBeDefined();
    }));

  });
});