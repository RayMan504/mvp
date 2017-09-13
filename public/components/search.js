angular.module('karaoke-party')
  // .factory('musixmatchTracks', ($http, $q) => {
  //   const service = {};
  //   const fetch = function (query) {
  //     const url = `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=JSON_CALLBACK&q_track=${query}&quorum_factor=1&apikey=18e2e9aa66c7dc3985df593bf10c44b4`;
  //     //  object that stores promises
  //     const deferred = $q.defer();
  //     console.log(deferred, 'deferred');
  //     // make jsonp request. return callback on json data
  //     $http.jsonp(url, { jsonpCallbackParam: 'callback' })
  //       .success((data) => {
  //         // resolve data
  //         deferred.resolve(data);
  //       }).error(() => {
  //         // handle eror
  //         deferred.reject('There was an error');
  //       });
  //     return deferred.promise;
  //   };
  //   console.log(fetch().$$state.status, 'tracks');
  //   return service;
  // })
  .controller('SearchCtrl', ($scope, $http, $window, musixmatch) => {
    $scope.searchString = '';
    $scope.onClick = function() {
      $scope.musixmatch = musixmatch.trackSearch($scope.searchString, (data) => {
        if (data.message.body.track_list.length === 0) {
          $scope.message = "invalid query";
          console.log($scope.message, 'empty results array');
        }
        $scope.results = data;
      });
    };
  });
//   .directive('searchBar', (musixmatch, $window) => ({
//     restrict: 'AE',
//     replace: true,
//     template: '<input type="text" ng-model="searchData" placeholder="Enter a search" />',
//     link(scope, elem) {
//       elem.bind('click', () => {
//         console.log(scope.searchData, 'yo');
//         if (scope.searchData) {
//           console.log($window.location, 'window');
//           musixmatch.trackSearch(scope.searchData);
//         }
//       });
//     },
//   }));
