angular.module('karaoke-party')
  // .service('musixmatch', function ($http, $window) {
  // //   // api call. get tracks from api 
  // // check if query matches user input
  //   this.trackSearch = function (query, apikey, callback) {
  //     const obj = {
  //       q: query,
  //       apikey: $window.MUSIXMATCH_API_KEY,
  //     };

  //     // check if q_track matches song query
  //     const url = `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=JSON_CALLBACK&q_track=${query}&quorum_factor=1&apikey=18e2e9aa66c7dc3985df593bf10c44b4`;
  //     // check if url has song query
  //     $http.jsonp(url, { jsonpCallbackParam: 'callback' })
  //       .success((data) => {
  //         // check response. display results with angular
  //         // do something with data 
  //         console.log(data.message.body);
  //       });
  //   };
  //   this.lyricsSearch = (trackId, apikey, callback) => {
  //     const obj = {
  //       q: trackId,
  //       apikey: $window.MUSIXMATCH_API_KEY,
  //     };


  //     const url = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=JSON_CALLBACK&track_id=97405613&apikey=18e2e9aa66c7dc3985df593bf10c44b4';

  //     $http.jsonp(url, { jsonpCallbackParam: 'callback' })
  //       .success((data) => {
  //         console.log(data.message.body);
  //       });
  //   };
  // })
  // .directive('searchBar', (musixmatch, $window) => ({
  //   restrict: 'AE',
  //   replace: true,
  //   template: '<input type="text" ng-model="searchData" placeholder="Enter a search" />',
  //   link(scope, elem) {
  //     elem.bind('click', () => {
  //       console.log(scope.searchData, 'yo');
  //       // call trackSearch function
  //       if (scope.searchData) {
  //         console.log($window.location, 'window');
  //         musixmatch.trackSearch(scope.searchData);
  //       }
  //     });
  //   },
  // }))
  .factory('musixmatchTracks', ($http, $q) => {
    const service = {};
    const fetch = function (query) {
      const url = `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=JSON_CALLBACK&q_track=${query}&quorum_factor=1&apikey=18e2e9aa66c7dc3985df593bf10c44b4`;
      //  object that stores promises
      const deferred = $q.defer();
      console.log(deferred, 'deferred');
      // make jsonp request. return callback on json data
      $http.jsonp(url, { jsonpCallbackParam: 'callback' })
        .success((data) => {
          // resolve data
          deferred.resolve(data);
        }).error(() => {
          // handle erors
          deferred.reject('There was an error');
        });
      return deferred.promise;
    };
    console.log(fetch().$$state.status, 'tracks');
    return service;
  })
  .controller('SearchCtrl', ($scope, $http, $window, musixmatch) => {
    // $scope.data = function () {
    //   // code breaks here
    //   musixmatchTracks.fetch()
    //     .then((data) => {
    //       $scope.data.artistData = data;
    //     }, (data) => {
    //       alert(data);
    //     });
    // };
    $scope.searchString = 'ALL';
    $scope.musixmatch = musixmatch.trackSearch($scope.search, (data) => {
      console.log(data);
    });
    // musixmatch.trackSearch($scope.searchData, $window.MUSIXMATCH_API_KEY, $scope.search);
    // musixmatch.lyricsSearch('97405613', $scope.search);
  });


// angular.module('karaoke-party')

//   .service('musixmatch', function ($http, $window) {
//     this.trackSearch = function (query, apikey, callback) {
//       const obj = {
//         q: query,
//         apikey: $window.MUSIXMATCH_API_KEY,
//       };

//       const url = `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=JSON_CALLBACK&q_track=${query}&quorum_factor=1&apikey=18e2e9aa66c7dc3985df593bf10c44b4`;

//       $http.jsonp(url, { jsonpCallbackParam: 'callback' })
//         .success((data) => {
//           console.log(data.message.body);
//         });
//     };

//     this.lyricsSearch = (trackId, apikey, callback) => {
//       const obj = {
//         q: trackId,
//         apikey: $window.MUSIXMATCH_API_KEY,
//       };


//       const url = 'https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=JSON_CALLBACK&track_id=97405613&apikey=18e2e9aa66c7dc3985df593bf10c44b4';

//       $http.jsonp(url, { jsonpCallbackParam: 'callback' })
//         .success((data) => {
//           console.log(data.message.body);
//         });
//     };
//   })
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
