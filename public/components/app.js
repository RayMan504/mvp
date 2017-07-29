angular.module('karaoke-party', [])
  .controller('AppCtrl', ($scope) => {
    $scope.currentNavItem = 'page1';
  })

  .directive('app', () => ({
    // TODO
    // make scope object
    restrict: 'E',
    templateUrl: 'templates/app.html',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,

  }));
