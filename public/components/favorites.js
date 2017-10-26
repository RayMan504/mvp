angular.module('karaoke-party')
  .controller('FavoritesCtrl', ($scope, $http, $sce) => {
    $scope.url = 'https://open.spotify.com/embed?uri=spotify:track:';
    $scope.players = [];
    $http.get('/favorites')
      .then((response) => {
        // First function handles success
        $scope.content = response.data;
        console.log($scope.content, 'hello');
      }, (response) => {
        // Second function handles error
        $scope.content = 'Something went wrong';
      });
    $scope.removeSong = function (songId) {
      $http.delete(`/favorites/${songId}`, { id: songId }).then((response) => {
        console.log(response, 'removed from database');
      });
    };
    $scope.trustSrc = function (src) {
      return $sce.trustAsResourceUrl(src);
    };
  });
