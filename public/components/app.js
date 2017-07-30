angular.module('karaoke-party', ['ngRoute'])
  .config(($routeProvider) => {
    $routeProvider
      .when('/home', {
        templateUrl: './templates/app.html',
      })
      .when('/favorites', {
        templateUrl: './templates/favorites.html',
      });
  })
// angular.module('karaoke-party')
  // .service('musixmatch', ($http, $window) => {
  //   // api call. get tracks from api 
  //   this.tracksSearch = (query, callback) => {
  //     const obj = {
  //       q: query,
  //       apikey: $window.MUSIXMATCH_API_KEY,
  //     };
  //     $http.get('http://api.musixmatch.com/ws/1.1', {
  //       params: {
  //         q: obj.q,
  //         apikey: obj.key,
  //       },
  //     })
  //       .then(({ data }) => {
  //         if (callback) {
  //           callback(data.items);
  //         }
  //       })
  //       .catch(({ data }) => {
  //         data.error.errors.forEach((err) => {
  //           console.error(err.message);
  //         });
  //       });
  //   };
  // })
// angular.module('karaoke-party')
//   .controller('AppCtrl', ($scope, $window, musixmatch) => {
//     // show exampleSongData in app component
//     // $scope.currentSong = $window.exampleSongData;
//     $scope.currentSong = musixmatch.tracksSearch;
//   });

  .controller('AppCtrl', ['$scope', '$window',
    ($scope, $window) => {

      $scope.currentSong = $window.exampleSongData;
      
    }]);

