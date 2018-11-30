'use strict';

describe('myApp.home module', function() {

  beforeEach(inject(function ($controller, $window, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('HomeCtrl', {$scope: scope});
    window = $window;
}));

  describe('home controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var HomeCtrl = $controller('HomeCtrl');
      expect(HomeCtrl).toBeDefined();
    }));

  });
});