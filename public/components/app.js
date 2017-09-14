angular.module('karaoke-party', ['ngRoute', 'ngMaterial', 'ngAnimate'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/home', {
        templateUrl: './templates/app.html',
      })
      .when('/favorites', {
        templateUrl: './templates/favorites.html',
      });
  });

