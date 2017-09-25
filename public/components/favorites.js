angular.module('karaoke-party')
  .controller('FavoritesCtrl', ($scope, $http) => {
    $http.get('/favorites')
      .then((response) => {
        // First function handles success
        $scope.content = response.data;
        console.log($scope.content[0]._id);
      }, (response) => {
        // Second function handles error
        $scope.content = 'Something went wrong';
      });
  });
