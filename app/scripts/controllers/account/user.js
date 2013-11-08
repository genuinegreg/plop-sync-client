'use strict';

angular.module('plopSyncClientApp')
    .controller('AccountUserCtrl', function ($scope, $rootScope, $location, Api, user) {

        $scope.user = user;

        $scope.save = function () {

            $rootScope.$emit('$plopRequestStart');

            if ($scope.user.password && $scope.user.password !== $scope.user.passwordCheck) {
                $scope.passwordCheck = true;
            }

            $scope.user.put().then(function () {
                $location.path('/account');
            });
        };


    });
