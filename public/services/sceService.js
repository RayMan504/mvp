angular.module('karaoke-party')
  .service('urlValidator', ($sce) => {
    this.trustSrc = function (src) {
      return $sce.trustAsResourceUrl(src);
    };
  });
