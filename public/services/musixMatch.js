angular.module('karaoke-party')
  .service('musixmatch', function ($http, $window) {
  // TODO
    this.trackSearch = function (query, callback) {
      // console.log('hey bruh');
      const obj = {
        q: query,
        // apikey: '18e2e9aa66c7dc3985df593bf10c44b4',
        apikey: $window.GENIUS_ACCESS_TOKEN,
      };
      // $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w';
      const url = `https://api.genius.com/search?q=${obj.q}&access_token=${obj.apikey}`
      // const url = `https://api.musixmatch.com/ws/1.1/track.search?format=jsonp&callback=JSON_CALLBACK&q_track=${obj.q}&quorum_factor=1&apikey=${obj.apikey}`;
      // $http.jsonp(url, { jsonpCallbackParam: 'callback' })
      //   .success((data) => {
      //     callback(data);
      //   });
      $http.get(url)
        .success((data) => {
          callback(data);
        });
    };
    this.getLyrics = (trackId, callback) => {
      const obj = {
        q: trackId,
        apikey: '18e2e9aa66c7dc3985df593bf10c44b4',
      };
      const url = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=JSON_CALLBACK&track_id=${obj.q}&apikey=${obj.apikey}`;
      $http.jsonp(url, { jsonpCallbackParam: 'callback' })
        .success((data) => {
          callback(data);
        });
    };
  });
