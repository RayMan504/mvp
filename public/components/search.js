angular.module('karaoke-party')
  .controller('SearchCtrl', ($scope, $http, $window, genius, $sce) => {
    $scope.searchString = '';
    $scope.type = 'track';
    $scope.onClick = function () {
      $scope.url = 'https://open.spotify.com/embed?uri=spotify:track:';
      $scope.players = [];
      $scope.spotify = genius.spotifySearch($scope.searchString, $scope.type, (data) => {
        $scope.content = data;
        console.log($scope.content, 'content');
        const arr = $scope.content.tracks.items;
        for (let i = 0; i < arr.length; i++) {
          $scope.players.push($scope.url.concat(arr[i].id));
          // console.log(x);
        }
        // arr.forEach((track) => {
        //   console.log
        //   $scope.id = track.id;
        // });
      });
    };
    $scope.trustSrc = function (src) {
      return $sce.trustAsResourceUrl(src);
    };
  })
// angular.module('karaoke-party')
  .directive('spotify', function() {
    return {
      template: '<iframe src={{trustSrc(players[0])}} width="300" height="300"></iframe>',
    };
  });
