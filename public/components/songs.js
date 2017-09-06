angular.module('karaoke-party')
  .controller('SongsCtrl', ($scope, $http, $window, musixmatch) => {
    // $scope.currentNavItem = 'page1';
    $scope.musixmatch = function() {
      $scope.results = musixmatch.trackSearch('colby', () => {});
      // $scope.results = $http.get('https://api.musixmatch.com/ws/1.1', function(data) {
      //   console.log(data);
      // });
      // $scope.results = ();
      // hfuhuqfhuhu
    };
  })
;
