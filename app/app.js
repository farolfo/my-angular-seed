'use strict';

angular.module('myApp.controllers', []);
angular.module('myApp.services', []);
angular.module('myApp.directives', []);

angular.module('myApp', [
  'ui.router',
  'ngResource',
  'ui.bootstrap',
  'myApp.controllers',
  'myApp.services',
  'myApp.directives'
]);

angular.module('myApp').config(function ($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.when('', '/home');

  $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
          });
})

.run(function() {

});
