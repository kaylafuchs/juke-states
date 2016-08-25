/* global juke */
'use strict';


juke.config(function($stateProvider){
	$stateProvider.state('albums', {
		url: '/albums',
		templateUrl: '/js/album/albums.template.html',
		controller: 'AlbumsCtrl'
	});
})