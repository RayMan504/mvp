angular.module('karaoke-party')
  .service('musixmatch', function ($http, $window) {
  // TODO
  // this.search = function(str, cb) {
  //   cb();
  // };
    this.search = function (query, callback) {
      const obj = {
        q: query,
        key: $window.MUSIXMATCH_API_KEY,
      };
      $http.post('http://api.musixmatch.com/ws/1.1/track.search', {
        params: {
          q: obj.q,
          key: obj.key,
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
  });
