angular.module('karaoke-party')
  .controller('SearchCtrl', ($scope) => {
    // $scope.currentNavItem = 'page1';
  })

  .directive('search', () => ({
    // TODO
    // make scope object
    restrict: 'E',
    templateUrl: 'templates/search.html',
    controller: 'SearchCtrl',
    controllerAs: 'ctrl',
    bindToController: true,

  }));
