'use strict';

angular.module('plopSyncClientApp')
    .controller('AccountUserCtrl', function ($scope, $location, Api) {

        Api.base().get().then(function (user) {
            $scope.user = user;
        });

        $scope.save = function () {

            if ($scope.user.password && $scope.user.password !== $scope.user.passwordCheck) {
                $scope.passwordCheck = true;
            }

            console.log('password : ', $scope.user.password);

            $scope.user.put().then(function () {
                $location.path('/account');
            });
        };


    });
