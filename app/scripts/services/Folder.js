'use strict';

angular.module('btsyncSaasClientApp')
    .service('Folder', function Folder($ressource) {
        return $ressource('users/:id/folders/:secret',
            {
                list: {method: 'GET', url: 'users/:id/folders'},
                create: {method: 'POST', url: 'users/:id/folders'},
                connect: {method: 'POST', url: 'users/:id/folders/:secret'}
            });
    });
