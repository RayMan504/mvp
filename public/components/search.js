angular.module('karaoke-party')
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
  .controller('SearchCtrl', ['$scope', '$window', ($scope, $window, musixmatch) => {
    $scope.trackSearchResults = () => {
      $scope.songs = $window.exampleSongData;
      console.log($scope.songs, 'yo');
    };
  }]);

