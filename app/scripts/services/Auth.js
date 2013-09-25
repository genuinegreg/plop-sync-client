'use strict';

angular.module('btsyncSaasClientApp')
    .service('Auth', function Auth($http) {


        var _token;

        return {
            setToken: function (token) {

                if (!token) {
                    _token = undefined;
                    $http.defaults.headers.common.Authorization = undefined;
                    return;
                }

                _token = token;
                $http.defaults.headers.common.Authorization = 'Basic ' + btoa(_token);
            }
        };
    });
