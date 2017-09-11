angular.module('karaoke-party')
  .controller('MainCtrl', ($scope, $mdSidenav) => {
    $scope.toggleList = function() {
      $mdSidenav('left').toggle();
    };
  });
