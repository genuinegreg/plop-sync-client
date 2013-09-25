'use strict';

angular.module('btsyncSaasClientApp')
    .factory('User', function ($resource) {

        var baseUrl = 'api/';

        return $resource(
            baseUrl + 'users/:id', {},
            {
                test: {method: 'POST', url: baseUrl + 'users/:id/create/:password'},
                login: {method: 'GET', url: baseUrl + 'users/:id/login/:password'}
            });


    });
