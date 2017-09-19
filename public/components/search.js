angular.module('karaoke-party')
  .controller('SearchCtrl', ($scope, $http, $window, genius) => {
    $scope.searchString = '';
    $scope.onClick = function () {
      $scope.genius = genius.trackSearch($scope.searchString, (data) => {
        // if (data.message.body.track_list.length === 0) {
        //   $scope.message = "invalid query";
        //   console.log($scope.message, 'empty results array');
        // }
        $scope.results = data;
        console.log($scope.results.response.hits, 'genius api results');
      });
    };
  });
