'use strict';

describe('Controller: AccountFoldersCreateCtrl', function () {

  // load the controller's module
  beforeEach(module('btsyncSaasClientApp'));

  var AccountFoldersCreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountFoldersCreateCtrl = $controller('AccountFoldersCreateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
