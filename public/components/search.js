// angular.module('karaoke-party')
//   .controller('SearchCtrl', ($scope, $window) => {
//     $scope.trackSearchResults = () => {
//       $scope.songs = $window.exampleSongData;
//       console.log($scope.songs, 'yo');
//     };
//   });

angular.module('karaoke-party')
// angular.module('karaoke-party')
  .service('musixmatch', ($http, $window) => {
    // api call. get tracks from api 
    this.tracksSearch = (query, callback) => {
      const obj = {
        q: query,
        apikey: $window.MUSIXMATCH_API_KEY,
      };
      $http.get('http://api.musixmatch.com/ws/1.1', {
        params: {
          q: obj.q,
          apikey: obj.key,
        },
      })
        .then(({ data }) => {
          if (callback) {
            callback(data.items);
          }
        })
        .catch(({ data }) => {
          data.error.errors.forEach((err) => {
            console.error(err.message);
          });
        });
    };
  })
// angular.module('karaoke-party')
//   .controller('AppCtrl', ($scope, $window, musixmatch) => {
//     // show exampleSongData in app component
//     // $scope.currentSong = $window.exampleSongData;
//     $scope.currentSong = musixmatch.tracksSearch;
//   });

  .controller('SearchCtrl', ['$scope', '$http', '$templateCache', '$window',
    ($scope, $window, $http, musixmatch, $templateCache) => {
      // $scope.currentSong = musixmatch.tracksSearch;

      $scope.currentSong = $window.exampleSongData;
      
    }]);


