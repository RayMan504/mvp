angular.module('karaoke-party')
  .controller('SongsCtrl', ($scope, $http, musixmatch) => {
    // $scope.currentNavItem = 'page1';
    // BOUND TO NG-MODEL="SEARCH"
    // $scope.search = 'ALL';
    $scope.findLyrics = function(trackId) {
      $scope.musixmatch = musixmatch.getLyrics(trackId, (data) => {
        $scope.results = data;
        console.log($scope.results.message.body.lyrics.lyrics_body, 'hello');
      });
    };
  })
;
