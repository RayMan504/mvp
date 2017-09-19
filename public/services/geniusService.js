angular.module('karaoke-party')
  .service('genius', function ($http, $window) {
  // TODO
    this.trackSearch = function (query, callback) {
      // console.log('hey bruh');
      const obj = {
        q: query,
        apikey: 'jQYhxGM7PD8x_hhV-_GV-Oj_B28uy-Tq3ZU6-sUTD5A6Zh_1KdBjEOD_hkNDLMEj',
      };
      const url = `https://api.genius.com/search?q=${obj.q}&access_token=${obj.apikey}`;
      $http.get(url)
        .success((data) => {
          callback(data);
        });
    };
    
    this.getLyrics = (artist, song, callback) => {
      const obj = {
        q: artist,
        title: song,
        // apikey: $window.GENIUS_ACCESS_TOKEN,
      };
      // const url = `http://api.lololyrics.com/0.5/getLyric?artist=${obj.q}&track=${obj.title}`;
      const url = `https://api.lyrics.ovh/v1/${obj.q}/${obj.title}`;
      $http.get(url)
        .success((data) => {
          console.log('hello');
          callback(data);
        });
      // const url = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=jsonp&callback=JSON_CALLBACK&track_id=${obj.q}&apikey=${obj.apikey}`;
      // $http.jsonp(url, { jsonpCallbackParam: 'callback' })
      //   .success((data) => {
      //     callback(data);
      //   });
    };
  });
