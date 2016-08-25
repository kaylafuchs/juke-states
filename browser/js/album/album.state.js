'use strict';

juke.config(function($stateProvider){
  $stateProvider.state('album', {
    url: '/albums/:id',
    templateUrl: '/js/album/album.template.html',
    controller: 'AlbumCtrl'
  });
})