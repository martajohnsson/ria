require.config({
	paths: {
		jQuery : 'lib/jquery/jquery',
		Underscore : 'lib/underscore/underscore',
		Backbone : 'lib/backbone/backbone',
		ArtistCollection : 'collections/ArtistCollection',
		AlbumCollection : 'collections/AlbumCollection'
	}
});

require( ['app','order!lib/jquery/jquery-1.7.1.min', 'order!lib/underscore/underscore-full','order!order!lib/backbone/backbone-full'],

	function( App ) {
		App.init();
	}
);