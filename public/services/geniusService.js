angular.module('karaoke-party')
  .service('genius', function ($http, $window) {
  // TODO
    this.trackSearch = function (query, callback) {
      // console.log('hey bruh');
      const obj = {
        q: query,
        apikey: $window.GENIUS_ACCESS_TOKEN,
      };
      const url = `https://api.genius.com/search?q=${obj.q}&access_token=${obj.apikey}`;
      $http.get(url)
        .success((data) => {
          callback(data);
        });
    };
    this.getLyrics = (lyricsUrl, callback) => {
      const obj = {
        q: lyricsUrl,
        apikey: $window.GENIUS_ACCESS_TOKEN,
      };
      const url = `${obj.q}?access_token=${obj.apikey}`;
      $http.get(url)
        .success((data) => {
          callback(data);
        });
      // const url = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=JSON_CALLBACK&track_id=${obj.q}&apikey=${obj.apikey}`;
      // $http.jsonp(url, { jsonpCallbackParam: 'callback' })
      //   .success((data) => {
      //     callback(data);
      //   });
    };
  });
