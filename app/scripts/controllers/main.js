'use strict';

angular.module('plopSyncClientApp')
    .controller('MainCtrl', function ($location, Api) {
        if (Api.isSignin()) {
            $location.path('/account');
        }
    });
