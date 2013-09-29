'use strict';

describe('Controller: AccountAccountCtrl', function () {

  // load the controller's module
  beforeEach(module('btsyncSaasClientApp'));

  var AccountAccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountAccountCtrl = $controller('AccountAccountCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
