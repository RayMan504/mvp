angular.module('karaoke-party')
  .controller('SongsCtrl', ($scope) => {
    // $scope.currentNavItem = 'page1';
  })

  .directive('songs', () => ({
    // TODO
    // make scope object
    restrict: 'E',
    templateUrl: 'templates/songs.html',
    controller: 'SongsCtrl',
    controllerAs: 'ctrl',
    bindToController: true,

  }));