'use strict';

angular.module('btsyncSaasClientApp')
    .controller('MainCtrl', function ($location, Api) {
        if (Api.isSignin()) {
            $location.path('/account');
        }
    });
