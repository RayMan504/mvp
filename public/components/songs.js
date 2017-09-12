angular.module('karaoke-party')
  .controller('SongsCtrl', ($scope, $http, musixmatch) => {
    // $scope.currentNavItem = 'page1';
    // BOUND TO NG-MODEL="SEARCH"
    $scope.search = 'ALL';
    $scope.musixmatch = musixmatch.trackSearch($scope.search, (data) => {
      $scope.results = data;
      console.log($scope.results.message.body, 'hello');
    });
  })
;
