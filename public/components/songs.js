angular.module('karaoke-party')
  .controller('SongsCtrl', ($scope, musixmatch) => {
    // $scope.currentNavItem = 'page1';
    $scope.musixmatch = musixmatch.trackSearch('colby', () => {});
    // $scope.results = 
    // $scope.results = $http.get('https://api.musixmatch.com/ws/1.1', function(data) {
    //   console.log(data);
    // });
    // $scope.results = ();
    // hfuhuqfhuhu
    // };
  })
;
