'use strict';

angular.module('plopSyncClientApp')
    .controller('AccountUserCtrl', function ($scope, $location, Api, user) {

        $scope.user = user;

        $scope.save = function () {

            if ($scope.user.password && $scope.user.password !== $scope.user.passwordCheck) {
                $scope.passwordCheck = true;
            }

            $scope.user.put().then(function () {
                $location.path('/account');
            });
        };


    });
