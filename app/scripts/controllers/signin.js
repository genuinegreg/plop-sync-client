'use strict';

angular.module('btsyncSaasClientApp')
    .controller('SigninCtrl', function ($scope, User, Auth, $location) {

        if (Auth.logedin()) {
            return  $location.path('/account');
        }

        $scope.clear = function () {
            // clear fields
            $scope.username = undefined;
            $scope.password = undefined;

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
            $scope.user = User.login({id: $scope.username, password: $scope.password},
                function success(userPromise) {

                    // clear states
                    $scope.loging = false;
                    $scope.error = false;

                    // set Basic Auth and redirect to account route
                    Auth.setToken(userPromise.user.token);
                    $location.path('/account');

                }, function error() {
                    // display error and clean things
                    $scope.error = true;
                    $scope.loging = false;
                    $scope.password = undefined;

                    // unset previous Http Auth Authentification
                    Auth.setToken();
                });
        };
    });
