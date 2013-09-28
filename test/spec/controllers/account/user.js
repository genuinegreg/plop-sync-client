'use strict';

describe('Controller: AccountUserCtrl', function () {

  // load the controller's module
  beforeEach(module('btsyncSaasClientApp'));

  var AccountUserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountUserCtrl = $controller('AccountUserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
