/* global juke */
'use strict';


juke.config(function($stateProvider){
	$stateProvider.state('artists', {
		url: '/artists',
		templateUrl: '/js/artist/artists.template.html',
		controller: 'ArtistsCtrl'
	});
})