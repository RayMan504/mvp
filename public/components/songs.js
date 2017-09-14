angular.module('karaoke-party')
  .controller('SongsCtrl', ($scope, $http, musixmatch) => {
    // $scope.currentNavItem = 'page1';
    // BOUND TO NG-MODEL="SEARCH"
    // $scope.search = 'ALL';
    $scope.findLyrics = function(trackId) {
      $scope.musixmatch = musixmatch.getLyrics(trackId, (data) => {
        $scope.lyrics = data;
        console.log($scope.lyrics, 'lyrics that dont appear');
        console.log($scope.lyrics.message.body.lyrics.lyrics_body, 'hello');
      });
    };
  })
;
