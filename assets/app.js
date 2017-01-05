angular.module('app', ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'homeCtrl'
    })
    .state('me', {
      url: '/me',
      templateUrl: 'me.html',
      controller: 'meCtrl'
    })
    .state('skillz', {
      url: '/skillz',
      templateUrl: 'skillz.html',
      controller: 'skillzCtrl'
    });

});
