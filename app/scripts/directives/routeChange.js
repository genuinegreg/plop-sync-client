'use strict';

angular.module('plopSyncClientApp')
    .directive('routeChange', function (Api) {
        return {
            controller: function ($rootScope, $scope) {
                $rootScope.$on('$routeChangeStart', function changingRoute(event, current, previous) {
                    $scope.loading = true;
                });

                $rootScope.$on('$plopRequestStart', function changingRoute(event, current, previous) {
                    $scope.loading = true;
                });

                $rootScope.$on('$plopRequestFail', function changingRoute(event, current, previous) {
                    $scope.loading = false;
                });

                $rootScope.$on('$routeChangeSuccess', function changedRoute(event, current, previous) {
                    $scope.loading = false;
                });
            },
            link: function postLink(scope, element, attrs) {

            }
        };
    });
