angular.module('karaoke-party')
  .directive('goClick', $location => function (scope, element, attrs) {
    let path;

    attrs.$observe('goClick', (val) => {
      path = val;
    });

    element.bind('click', () => {
      scope.$apply(() => {
        $location.path(path);
      });
    });
  })
  .controller('SongsCtrl', ($scope, $http, genius) => {
    // $scope.currentNavItem = 'page1';
    // BOUND TO NG-MODEL="SEARCH"
    // $scope.search = 'ALL';
    $scope.findLyrics = function (artist, song) {
      $scope.genius = genius.getLyrics(artist, song, (data) => {
        $scope.lyrics = data;
        console.log($scope.lyrics.lyrics, 'lyrics that dont appear');
        // console.log($scope.lyrics.message.body.lyrics.lyrics_body, 'hello');
      });
    };
  })
;
