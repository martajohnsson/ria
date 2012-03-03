define([
	'jQuery',
	'Underscore',
	'Backbone',
    'ArtistCollection',
    //'AlbumCollection',
	'views/index'],

    function( $, _, Backbone, ArtistCollection ,IndexView )
    {
		return AppRouter = Backbone.Router.extend({
			
            initialize : function() {
                
                this.artistCollection = new ArtistCollection();
			},

			routes : {
				'' : 'Home'
			},

			Home : function() {

                var indexView = new IndexView(this.artistCollection);
				indexView.render();
                
                $('#newArtist').html( indexView.el );
			}
		});
});
