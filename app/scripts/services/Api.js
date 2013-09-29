'use strict';

angular.module('btsyncSaasClientApp')
    .service('Api', function Auth($http, Restangular) {

        Restangular.setBaseUrl('');
        Restangular.addElementTransformer('folders', function (element) {
            var now = new Date();
            var created = new Date(element.created);

            var days = now.getDaysBetween(created);
            if (days > 0) {

                element.createdTimer = days + ' days ago';
                return element;
            }

            var hours = created.getHoursBetween(now);
            if (hours > 0) {
                element.createdTimer = hours + ' hours ago';
                return element;
            }


            var minutes = created.getMinutesBetween(now);
            if (minutes > 0) {
                element.createdTimer = minutes + ' minutes ago';
                return element;
            }

            element.createdTimer = 'just now';
            return element;
        });

        Restangular.addElementTransformer('users', function (element) {
            if (element.firstName || element.lastName) {
                element.displayName = (element.firstName + ' ' + element.lastName).trim();
            }
            else {
                element.displayName = element.id;
            }
            return element;
        });

        var _token;
        var _id;

        // restore session if available
        if (Modernizr.sessionstorage) {

            if (sessionStorage._id) {
                _id = sessionStorage.getItem('_id');
            }
            if (sessionStorage._token) {
                _token = sessionStorage.getItem('_token');
            }
            if (_id && _token) {
                $http.defaults.headers.common.Authorization = 'Basic ' + btoa(_token);
            }
        }


        // save session helper
        function saveSession(id, token) {

            // save token and id in sessionStorage
            if (Modernizr.sessionstorage) {
                sessionStorage.setItem('_id', id);
                sessionStorage.setItem('_token', token);
            }

            // set _id and _token
            _id = id;
            _token = token;

            // set Authorization Header
            $http.defaults.headers.common.Authorization = 'Basic ' + btoa(_token);
        }

        // clear sesion helper
        function clearSession() {
            if (Modernizr.sessionstorage) {
                sessionStorage.removeItem('_id');
                sessionStorage.removeItem('_token');
            }

            _id = undefined;
            _token = undefined;

            $http.defaults.headers.common.Authorization = undefined;
        }


        return {
            signin: function (username, password, success, error) {

                return Restangular.
                    one('users', username).
                    post('login', { password: password }).
                    then(
                    function successAction(user) {
                        saveSession(user.id, user.token);
                        success(user);

                    },
                    function errorAction(err) {
                        clearSession();
                        error(err);
                    }
                );
            },
            signup: function (username, password, success, error) {

                return Restangular.
                    one('users', username).
                    post('create', {password: password}).
                    then(
                    function succesAction(user) {
                        saveSession(user.id, user.token);
                        success(user);
                    },
                    function (err) {
                        clearSession();
                        error(err);
                    }
                );
            },
            signout: function () {
                clearSession();
            },
            id: function () {
                return _id;
            },
            token: function () {
                return _token;
            },
            isSignin: function () {
                return (_id && _token);
            },
            base: function () {
                if (!_id) {
                    return;
                }
                return Restangular.one('users', _id);
            }
        };
    })
;
