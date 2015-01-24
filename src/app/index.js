'use strict';

angular.module('reckoning', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngRoute', 'ngMaterial', 'ngCordova'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
