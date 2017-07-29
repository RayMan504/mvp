angular.module('karaoke-party')
  .controller('SearchCtrl', ($scope, $window) => {
    $scope.trackSearchResults = (query) => {
      if (query) {
        $scope.songs = $window.exampleSongData;
        console.log($scope.songs,'yo');
      } 
      $scope.message = 'No results'; 
    };
  });
