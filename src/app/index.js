'use strict';

angular.module('reckoning', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngRoute', 'ngMaterial', 'ngCordova'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .when('/clients', {
                templateUrl: 'app/clients/clients.html',
                controller: 'ClientsCtrl'
            })
            .when('/clients/:id', {
                templateUrl: 'app/client/client.html',
                controller: 'ClientCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .config(function ($mdThemingProvider){
        console.log($mdThemingProvider);
        $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
                //'default': '400', // by default use shade 400 from the purple palette for primary intentions
                //'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                //'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                //'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
            })
            // If you specify less than all of the keys, it will inherit from the
            // default shades
            //.accentPalette('pink', {
            //    'default': '200' // use shade 200 for default, and keep all other shades the same
            //});
        $mdThemingProvider.theme("default-dark", "default").dark();
        $mdThemingProvider.theme('secondary')
            .primaryPalette('indigo', {
            })
            // If you specify less than all of the keys, it will inherit from the
            // default shades
            //.accentPalette('blue', {
            //    'default': '200' // use shade 200 for default, and keep all other shades the same
            //});
        $mdThemingProvider.theme("secondary-dark", "secondary").dark();
    })
;
