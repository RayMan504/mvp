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
    $scope.stringify = function (value) {
      console.log(value, 'undefined');
      return JSON.stringify(value);
    };
    $scope.parseJson = function (json) {
      return JSON.parse(json);
    };
  });
