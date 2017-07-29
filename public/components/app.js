angular.module('karaoke-party', [])
  .controller('AppCtrl', ($scope, $window) => {
    // show exampleSongData in app component
    $scope.currentSong = $window.exampleSongData;
  });
