define([
	'jQuery',
	'Underscore',
	'Backbone',
    'ArtistCollection',
    'AlbumCollection',
	'views/index'],

    function( $, _, Backbone, ArtistCollection, AlbumCollection ,IndexView )
    {
		return AppRouter = Backbone.Router.extend({
			
            initialize : function() {
                
                //models
                this.artistCollection = new ArtistCollection();
                this.albumCollection = new AlbumCollection();
			},

			routes : {
				'' : 'Home'
			},

			Home : function() {

                var indexView = new IndexView(this.artistCollection, this.albumCollection);
				indexView.render();
                
                //$('#newArtist').html( indexView.el );
                $('#newAlbum').html( indexView.el );
                
			}
		});
});
