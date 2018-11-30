'use strict';

describe('myApp.notfound module', function() {
  var scope, $location, createController;

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
      $location = _$location_;

      scope = $rootScope.$new();

      createController = function() {
          return $controller('notfoundController', {
              '$scope': scope, '$location': $location
          });
      };
  }));

  describe('notfound controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var NotFoundontroller = $controller('notfoundController');
      expect(NotFoundontroller).toBeDefined();
    }));

  });
});