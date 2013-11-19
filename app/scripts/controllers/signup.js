'use strict';

angular.module('plopSyncClientApp')
    .controller('SignupCtrl', function ($scope, $rootScope, Api, $location) {

        if (Api.isSignin()) {
            return  $location.path('/account/folders/list');
        }

        $scope.clear = function () {
            // clear errors and logging state
            $scope.loging = false;
            $scope.error = false;
        };

        $scope.signUp = function () {

            // check username and password fields
            if (!$scope.username || !$scope.password) {
                $scope.error = true;
                $scope.loging = false;
                return;
            }

            $rootScope.$emit('$plopRequestStart');

            // set loging state
            $scope.loging = true;
            console.log('try to sign up ' + $scope.username + ' ' + $scope.password);
            // try to login
            $scope.user = Api.signup($scope.username, $scope.password,
                function success(userPromise) {
                    // clear states
                    $scope.loging = false;
                    $scope.error = false;

                    // redirect to /account
                    $location.path('/account/folders/list');

                },
                function error(err) {
                    // display error and clean things
                    $rootScope.$emit('$plopRequestFail');
                    $scope.error = true;
                    $scope.loging = false;
                    $scope.password = undefined;
                });
        };
    });
