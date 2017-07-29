angular.module('karaoke-party')
  .controller('SearchCtrl', ($scope, $window) => {
    $scope.trackSearchResults = () => {
      $scope.songs = $window.exampleSongData;
      console.log($scope.songs,'yo');
    };
  });
