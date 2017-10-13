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
    this.spotifySearch = function (query, type, callback) {
      const obj = {
        q: query,
        t: type,
        accessToken: 'BQCVY1KPrS6pGOkBIfvpmyWWRNbzaVvIFjx6FWBWiZLSPmtfaFq9t34uwT9zaId6M9ZDhJLkp-R5bZB99P2sf6HpHGdAYHiqN9Xl7WjJjGr4h2E51Ru_wQ64dLJVRt_Czo4xBUqXN6cqUhcUhEzQpNUQIxlhpc_i1eyFOcI',
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
      const url = `https://api.lyrics.ovh/v1/${obj.q}/${obj.title}`;
      $http.get(url)
        .success((data) => {
          console.log('hello');
          callback(data);
        });
    };
  });
