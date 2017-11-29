angular.module('karaoke-party')
  .controller('SearchCtrl', ($scope, $http, $window, genius, $sce) => {
    $scope.searchString = '';
    $scope.type = 'track';
    $scope.onClick = function () {
      $scope.url = 'https://open.spotify.com/embed?uri=spotify:track:';
      $scope.players = [];
      $scope.spotify = genius.spotifySearch($scope.searchString, $scope.type, (data) => {
        $scope.content = data;
        console.log($scope.content, 'content');
        const arr = $scope.content.tracks.items;
        for (let i = 0; i < arr.length; i++) {
          $scope.players.push([$scope.url.concat(arr[i].id)]);
          // console.log(x);
        }
        // arr.forEach((track) => {
        //   console.log
        //   $scope.id = track.id;
        // });
      });
    };
    $scope.trustSrc = function (src) {
      return $sce.trustAsResourceUrl(src);
    };
    // $scope.player = function (arr) {
    //   for (let i = 0; i < arr.length; i++) {
    //     return $scope.trustSrc(arr[i]);
    //   }
    // };
  })
// angular.module('karaoke-party')
  .directive('spotify', () => ({
    restrict: 'E',
    replace: true,
    scope: {
      sub: '=',
      linker: '=',
      items: '=',
      findLyrics: '=?bind',
      song: '=',
    },
    template: '<div></div>',
    controller: 'SongsCtrl',
    link($scope, elem) {
      let resultingHtml = '';
      console.log($scope.findLyrics, 'array?');
      // const urls = [];
      for (var i = 0; i < $scope.sub.length; i++) {
        resultingHtml += `<iframe src=${$scope.linker($scope.sub[i])} width="300" height="300"></iframe><div ng-repeat="song in ${$scope.items}">
        {{song}}
        <div class=".col-lg-4" ng-if="content">
          <div class=".col-lg-4">
            <button class="btn btn-primary fa fa-music" ng-click="${$scope.findLyrics()}">
              Lyrics
            </button>
          </div>
          <div class=".col-lg-4">
            <form action="/favorites" method="POST">
              <div class=".col-sm-*">
                <button class="btn btn-success fa fa-heart" ng-click="post(song)" type="Submit"> Add To Favorites</md-button>
              </div>
            </form>
          </div>
        </div>
      </div>`;
      }
      // urls.forEach((url) => {
      //   resultingHtml += `<iframe src=${$scope.trustSrc(url)} width="300" height="300"></iframe>`;
      // });
      // const html = resultingHtml;
      elem.replaceWith(resultingHtml);
    },
  }));
