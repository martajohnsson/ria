require.config({
	paths: {
		jQuery : 'lib/jquery/jquery',
		Underscore : 'lib/underscore/underscore',
		Backbone : 'lib/backbone/backbone',
		ArtistCollection : 'collections/ArtistCollection',
		AlbumCollection : 'collections/AlbumCollection'
	}
});

require( ['app'],

	function( App ) {
		App.init();
	}
);