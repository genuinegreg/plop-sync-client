'use strict';

angular.module('btsyncSaasClientApp')
    .directive('header', function (Api) {
        return {
            templateUrl: 'views/directives/header.html',
            scope: {},
            replace: true,
            controller: function ($scope, Api, $location) {
                $scope.signout = function () {
                    Api.signout();
                    $location.path('/');
                    $scope.user = undefined;
                };
            },
            link: function postLink(scope, element, attrs) {
                if (Api.isSignin()) {
                    scope.user = Api.id();
                }

                scope.header = attrs.header;
            }
        };
    });
