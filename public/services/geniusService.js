angular.module('karaoke-party')
  .service('genius', function ($http, $window) {
  // TODO
    this.trackSearch = function (query, callback) {
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
    this.spotifySearch = function (query, type, callback) {
      const obj = {
        q: query,
        t: type,
        accessToken: $window.SPOTIFY_ACCESS_TOKEN,
      };
      const url = `https://api.spotify.com/v1/search?q=${obj.q}&type=${obj.t}&access_token=${obj.accessToken}`;
      $http.get(url).success((data) => {
        callback(data);
      });
    };
    this.getLyrics = (artist, song, callback) => {
      const obj = {
        q: artist,
        title: song,
      };
      console.log(obj.q, 'Thesmoothcat?');
      const url = `https://api.lyrics.ovh/v1/${obj.q}/${obj.title}`;
      $http.get(url)
        .success((data) => {
          callback(data);
        });
    };
  });
