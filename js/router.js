define([
	'jQuery',
	'Underscore',
	'Backbone',
    'ArtistCollection',
    'AlbumCollection',
	'views/index',
    'views/ArtistCollectionView'],

    function( $, _, Backbone, ArtistCollection, AlbumCollection ,IndexView, ArtistCollectionView )
    {
		return AppRouter = Backbone.Router.extend({
			
            initialize : function() {
                
                //models
                this.artistCollection = new ArtistCollection();
                this.albumCollection = new AlbumCollection();
			},

			routes : {
				'' : 'Index'
			},

			Index : function() {

                var indexView = new IndexView(this.artistCollection, this.albumCollection);
				indexView.render();
                
                var artistCollectionView = new ArtistCollectionView({collection:this.artistCollection});
                artistCollectionView.render();
                
                //$('#newArtist').html( indexView.el );
                
                $('#newAlbum').html( indexView.el );
                $('#library-holder').html( artistCollectionView.el ); 
                
			}
		});
});
