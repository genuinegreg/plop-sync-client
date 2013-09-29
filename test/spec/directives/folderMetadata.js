'use strict';

describe('Directive: folderMetadata', function () {

  // load the directive's module
  beforeEach(module('btsyncSaasClientApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<folder-metadata></folder-metadata>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the folderMetadata directive');
  }));
});