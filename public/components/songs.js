angular.module('karaoke-party')
  .controller('SongsCtrl', ($scope, $http, genius) => {
    // $scope.currentNavItem = 'page1';
    // BOUND TO NG-MODEL="SEARCH"
    // $scope.search = 'ALL';
    $scope.findLyrics = function (artist, song) {
      $scope.genius = genius.getLyrics(artist, song, (data) => {
        $scope.lyrics = data;
        console.log($scope.lyrics, 'lyrics');
      });
    };
    $scope.post = function (song) {
      console.log(song, 'hello');
      $http.post('/favorites', song).then((response) => {
        console.log(response, 'saved in database');
      });
    };
  })
;
