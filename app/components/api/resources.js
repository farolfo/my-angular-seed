'use strict';

angular.module('myApp.services')

    .factory('myAPI', function ($resource) {
        return $resource('myAPIUrl');
    });
