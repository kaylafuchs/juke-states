/* global juke */
'use strict';


juke.config(function($stateProvider){
	$stateProvider.state('albums', {
		url: '/albums',
		templateUrl: '/js/album/albums.template.html',
		resolve: {
			albums: function(AlbumFactory) {
				return AlbumFactory.fetchAll();
			}
		},
		controller: 'AlbumsCtrl',

	});
})