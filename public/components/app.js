var myApp = angular.module('karaoke-party', []);

angular.module('karaoke-party')
// add controller. takes name and callback. callback takes scope object
.controller('AppCtrl', function($scope) {
  // add select videoFunction on scope
  
  

})

.directive('app', function() {
  return {
    // TODO
    // make scope object
    scope: {
      // name: '='
    },
    restrict: 'E',
    templateUrl: 'templates/app.html',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,

  };
});