angular.module('karaoke-party', ['ngRoute', 'ngMaterial'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/home', {
        templateUrl: './templates/app.html',
      })
      .when('/favorites', {
        templateUrl: './templates/favorites.html',
      });
  });

