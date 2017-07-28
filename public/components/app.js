var myApp = angular.module('karaoke-party', []);

angular.module('karaoke-party')
// add controller. takes name and callback. callback takes scope object
.controller('AppCtrl', function($scope) {
  // add select videoFunction on scope
  this.selectSongs = (song) => {
    this.currentSongs = song;
  };
  // add search results function on scope
  this.searchResults = (data) => {
  // add videos property on scope
    this.songs = data;
  // add currentSongs property on scope
    this.currentSongs = this.songs[0];
  };
  

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