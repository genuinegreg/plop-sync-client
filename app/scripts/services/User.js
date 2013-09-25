'use strict';

angular.module('btsyncSaasClientApp')
    .factory('User', function ($resource) {

        var baseurl = 'api/';

        return $resource(
            baseurl + 'users/:id', {},
            {
                save: {method: 'POST', url: baseurl + 'users/:id/create/:password'},
                login: {method: 'GET', url: baseurl + 'users/:id/login/:password'}
            });


    });
