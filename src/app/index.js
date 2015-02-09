'use strict';

angular.module('reckoning', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngRoute', 'ngMaterial', 'ngCordova',
                             'js-data', 'ui.router', 'ngMdIcons'])
    .config(function ($stateProvider, $urlRouterProvider) {
        console.log('setting up routes');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('newClient', {
                url: '^/client',
                templateUrl: 'app/client/client.html',
                controller: 'ClientCtrl'
            })
            .state('allClients', {
                url: '^/clients',
                templateUrl: 'app/clients/clients.html',
                controller: 'ClientsCtrl'
            })
            .state('viewClient', {
                url: '^/client/:id',
                templateUrl: 'app/client/client.html',
                controller: 'ClientCtrl'
            }
        );

        $urlRouterProvider.otherwise("/");
    })
    .config(function ($mdThemingProvider){

        console.log('setting up themes');
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
            .primaryPalette('indigo');
        $mdThemingProvider.theme("secondary-dark", "secondary").dark();
        $mdThemingProvider.theme('paper')
            .primaryPalette('yellow')
            .accentPalette('orange');
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        //.accentPalette('blue', {
        //    'default': '200' // use shade 200 for default, and keep all other shades the same
        //});
        $mdThemingProvider.theme("paper-dark", "paper").dark();

        console.log($mdThemingProvider);
    })
    .run(function (DS) {
        console.log('setting up storage');

        DS.registerAdapter('localstorage', new DSLocalStorageAdapter(), { default: true });
        DS.defineResource('client');
        DS.defineResource('invoice');
    })
;
