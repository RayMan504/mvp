angular.module('karaoke-party')
  .service('musixmatch', function ($http, $window) {
  // TODO
    this.trackSearch = function (query, callback) {
      // console.log('hey bruh');
      const obj = {
        q: query,
        apikey: $window.MUSIXMATCH_API_KEY,
      };
      // $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w';
      const url = `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=JSON_CALLBACK&q_track=${obj.q}&quorum_factor=1&apikey=${obj.apikey}`;
      $http.jsonp(url, { jsonpCallbackParam: 'callback' })
        .success((data) => {
          callback(data);
        });
      // .then(function({ data }) {
      //   console.log();
      //   if (callback) {
      //     callback(data.items);
      //   }
      // })
      // .catch(function({ data }) {
      // console.error(data);
      // data.error.errors.forEach((err) => {
      //   console.error(err.message);
      // });
      // });
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
