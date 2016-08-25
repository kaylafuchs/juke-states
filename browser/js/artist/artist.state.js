'use strict';


juke.config(function($stateProvider){
	$stateProvider.state('artist', {
		url: '/artists/:id',
		templateUrl: '/js/artist/artist.template.html',
		controller: 'ArtistCtrl'
	});
})