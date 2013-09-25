'use strict';

angular.module('btsyncSaasClientApp')
    .controller('SignupCtrl', function ($scope, User, Auth, $location) {

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

        $scope.signUp = function () {


            // check username and password fields
            if (!$scope.username || !$scope.password) {
                $scope.error = true;
                $scope.loging = false;
                return;
            }

            // set loging state
            $scope.loging = true;
            console.log('try to sign up ' + $scope.username + ' ' + $scope.password);
            // try to login
            $scope.user = User.test({id: $scope.username, password: $scope.password}, {},
                function success(userPromise) {
                    console.log('ok')       ;
                    // clear states
                    $scope.loging = false;
                    $scope.error = false;

                    // set Basic Auth and redirect to account route
                    Auth.setToken(userPromise.user.token);
                    $location.path('/account');

                }, function error(err) {

                    console.log(err);

                    // display error and clean things
                    $scope.error = true;
                    $scope.loging = false;
                    $scope.password = undefined;

                    // unset previous Http Auth Authentification
                    Auth.setToken();
                });
        };
    });
