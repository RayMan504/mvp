angular.module('karaoke-party')
  .service('musixmatch', function ($http, $window) {
  // TODO
    // this.search = function(str, cb) {
    //   cb();
    // };
    console.log('hey');
    this.trackSearch = function(query, callback) {
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
        .then(function({ data }) {
          if (callback) {
            callback(data.items);
          }
        })
        .catch(function({ data }) {
          data.error.errors.forEach((err) => {
            console.error(err.message);
          });
        });
    };
    // this.tracks.lyrics.get = (query, callback) => {
    //   const obj = {
    //     q: query,
    //     apikey: $window.MUSIXMATCH_API_KEY,
    //   };
    //   $http.get('http://api.musixmatch.com/ws/1.1', {
    //     params: {
    //       q: obj.q,
    //       apikey: obj.key,
    //     },
    //   })
    //     .then(({ data }) => {
    //       if (callback) {
    //         callback(data.items);
    //       }
    //     })
    //     .catch(({ data }) => {
    //       data.error.errors.forEach((err) => {
    //         console.error(err.message);
    //       });
    //     });
    // };
  });
