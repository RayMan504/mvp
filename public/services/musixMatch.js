angular.module('video-player')
  .service('youTube', function ($http, $window) {
  // TODO
  // this.search = function(str, cb) {
  //   cb();
  // };
    this.search = function (query, callback) {
      const obj = {
        part: 'snippet',
        type: 'video',
        q: query,
        max: 5,
        videoEmbeddable: true,
        key: $window.MUSIXMATCH_API_KEY,
      };
      $http.get('http://api.musixmatch.com/ws/1.1', {
        params: {
          part: obj.part,
          q: obj.q,
          type: 'video',
          maxResults: obj.max,
          key: obj.key,
          videoEmbeddable: obj.videoEmbeddable,
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
