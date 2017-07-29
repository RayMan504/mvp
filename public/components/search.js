angular.module('karaoke-party')
  .controller('SearchCtrl', ($scope) => {
    $scope.trackSearchResults = () => {
      $scope.songs = $window.exampleSongData;
    };
  });
