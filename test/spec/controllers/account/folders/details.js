'use strict';

describe('Controller: AccountFoldersDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('plopSyncClientApp'));

  var AccountFoldersDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountFoldersDetailsCtrl = $controller('AccountFoldersDetailsCtrl', {
      $scope: scope
    });
  }));

//  it('should attach a list of awesomeThings to the scope', function () {
//    expect(scope.awesomeThings.length).toBe(3);
//  });
});
