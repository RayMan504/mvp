angular.module('karaoke-party')
  .controller('SongsCtrl', ($scope, $window) => {
    // $scope.currentNavItem = 'page1';
    $scope.songs;
    $scope.trackSearchResults = () => {
      $scope.songs = $window.exampleSongData;
    };
  })
;
