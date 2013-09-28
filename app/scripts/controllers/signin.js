'use strict';

angular.module('btsyncSaasClientApp')
    .controller('SigninCtrl', function ($scope, Api, $location) {

        if (Api.isSignin()) {
            return  $location.path('/account/folders/list');
        }

        $scope.clear = function () {
            // clear errors and logging state
            $scope.loging = false;
            $scope.error = false;
        };

        $scope.login = function () {


            // check username and password fields
            if (!$scope.username || !$scope.password) {
                $scope.error = true;
                $scope.loging = false;
                return;
            }

            // set loging state
            $scope.loging = true;

            // try to login
            $scope.user = Api.signin($scope.username, $scope.password,
                function success() {
                    // clear states
                    $scope.loging = false;
                    $scope.error = false;

                    // redirect to /account
                    $location.path('/account/folders/list');
                },
                function error() {
                    // display error and clean things
                    $scope.error = true;
                    $scope.loging = false;
                    $scope.password = undefined;
                });
        };
    });
