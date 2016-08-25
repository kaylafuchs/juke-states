'use strict';

juke.config(function($stateProvider){
  $stateProvider.state('album', {
    url: '/albums/:id',
    templateUrl: '/js/album/album.template.html',
    resolve: {
    	album: function(AlbumFactory, $stateParams){
    		return AlbumFactory.fetchById($stateParams.id);
    	}
    },
    controller: 'AlbumCtrl'
  });
})