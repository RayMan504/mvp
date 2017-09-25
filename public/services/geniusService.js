angular.module('karaoke-party')
  .service('genius', function ($http, $window) {
  // TODO
    this.trackSearch = function (query, callback) {
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
      };
      const url = `https://api.lyrics.ovh/v1/${obj.q}/${obj.title}`;
      $http.get(url)
        .success((data) => {
          console.log('hello');
          callback(data);
        });
    };
  });
