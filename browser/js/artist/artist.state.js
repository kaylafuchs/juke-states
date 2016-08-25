'use strict';


juke.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('artist', {
		url: '/artists/:id',
		// abstract: true,
		templateUrl: '/js/artist/artist.template.html',
		resolve: {
			artist: function(ArtistFactory, $stateParams){
				return ArtistFactory.fetchById($stateParams.id)
			}
		},
		controller: 'ArtistCtrl'
	})
	.state('artist.albums', {
		url: '/albums',
		templateUrl: '/js/artist/artist.albums.template.html',
		controller: 'ArtistCtrl'
	})
	.state('artist.songs', {
		url: '/songs',
		templateUrl: '/js/artist/artist.songs.template.html',
		controller: 'ArtistCtrl'
	})

	// $rootScope.$on('$stateChangeStart', function (event, toState) { 
	// 	console.log(event);
	// 	console.log(toState); 
	//    if (toState.name === "artist") { 
	//      event.preventDefault();
	//      $state.go('artist.albums', {id: 2});
	//    }
	//  });

	// $urlRouterProvider.when('/artists/2', '/artists/2/albums');

})
