angular.module('karaoke-party', ['ngRoute', 'ngMaterial', 'ngAnimate'])
  .config(($routeProvider, $locationProvider) => {
    $routeProvider
      .when('/home', {
        templateUrl: './templates/app.html',
      })
      .when('/favorites', {
        templateUrl: './templates/favorites.html',
      });
    // use the HTML5 History API
    // $locationProvider.html5Mode(true);
  });

