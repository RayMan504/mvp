angular.module('karaoke-party', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/home', {
        templateUrl: './templates/app.html',
      })
      .when('/favorites', {
        templateUrl: './templates/favorites.html',
      });
  })
  .controller('AppCtrl', ($scope, $window) => {
    // show exampleSongData in app component
    $scope.currentSong = $window.exampleSongData;
  });
