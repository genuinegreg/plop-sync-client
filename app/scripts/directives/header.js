'use strict';

angular.module('btsyncSaasClientApp')
    .directive('header', function () {
        return {
            templateUrl: 'scripts/directives/header.html',
            restrict: 'A',
            replace: true
        };
    });
