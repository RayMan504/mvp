angular.module('karaoke-party')
  .controller('FavoritesCtrl', ($scope, $http) => {
    $http.get('/favorites')
      .then((response) => {
        // First function handles success
        $scope.content = response.data;
      }, (response) => {
        // Second function handles error
        $scope.content = 'Something went wrong';
      });
    $scope.removeSong = function (songId) {
      $http.delete(`/favorites/${songId}`, { id: songId }).then((response) => {
        console.log(response, 'removed from database');
      });
    };
  });
